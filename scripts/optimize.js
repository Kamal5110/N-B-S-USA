import fs from 'fs';
import path from 'path';
import { minify } from 'terser';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create directory if it doesn't exist
const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Recursive function to get all files in directory and subdirectories
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    // Skip min directories to avoid duplicate processing
    if (file === 'min' || file.includes('.min.')) return;
    
    if (fs.statSync(filePath).isDirectory()) {
      fileList = getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to ensure output directory matches input directory structure
function getOutputPath(inputPath, baseInputDir, baseOutputDir) {
  const relativePath = path.relative(baseInputDir, inputPath);
  const relativeDir = path.dirname(relativePath);
  const fileName = path.basename(relativePath);
  
  // Create the output directory structure if it doesn't exist
  const outputDir = path.join(baseOutputDir, relativeDir);
  createDirIfNotExists(outputDir);
  
  // Return the full output path with .min extension
  const extension = path.extname(fileName);
  const baseName = path.basename(fileName, extension);
  return path.join(outputDir, `${baseName}.min${extension}`);
}

// Function to minify JavaScript files with advanced options
async function minifyJsFiles(directory, outputDir) {
  try {
    createDirIfNotExists(outputDir);
    
    // Get all JS files recursively
    const jsFiles = getAllFiles(directory)
      .filter(file => file.endsWith('.js') && !file.includes('.min.js'));
    
    if (jsFiles.length === 0) {
      console.log('No JavaScript files found to optimize.');
      return;
    }
    
    console.log(`Found ${jsFiles.length} JavaScript files to optimize.`);
    
    // Process each file
    for (const filePath of jsFiles) {
      const outputPath = getOutputPath(filePath, directory, outputDir);
      const code = fs.readFileSync(filePath, 'utf8');
      
      try {
        // Advanced terser configuration for maximum minification
        const minified = await minify(code, {
          compress: {
            drop_console: false,   // Keep console logs for development
            drop_debugger: true,   // Remove debugger statements
            passes: 2,             // Multiple optimization passes
            unsafe_math: true,     // Allow optimizations that might affect behavior slightly
            unsafe_methods: true,  // Allow optimizations that might affect behavior slightly
            booleans_as_integers: true,  // Convert booleans to 0 and 1
            pure_getters: true,    // Assume getters don't have side effects
            sequences: true,       // Join consecutive statements with the "comma operator"
            conditionals: true,    // Optimize if-s and conditional expressions
            comparisons: true,     // Optimize comparisons
            evaluate: true,        // Evaluate constant expressions
            dead_code: true        // Remove unreachable code
          },
          mangle: {
            properties: false      // Don't mangle property names (could break functionality)
          },
          format: {
            comments: false,       // Remove all comments
            ecma: 2020,            // Use modern ECMAScript features
            beautify: false,       // No code formatting
            indent_level: 0,       // No indentation
            ascii_only: true,      // Use only ASCII characters
            wrap_iife: true,       // Wrap IIFEs in parentheses
            braces: true           // Preserve braces for conditionals
          },
          ecma: 2020,              // Parse as ECMAScript 2020
          module: true,            // Allow module syntax
          sourceMap: false,        // Don't generate source maps (reduces file size)
          toplevel: true           // Enable top level variable and function name mangling
        });
        
        fs.writeFileSync(outputPath, minified.code);
        console.log(`Minified: ${filePath} -> ${outputPath}`);
      } catch (err) {
        console.error(`Error minifying ${filePath}:`, err);
        
        // Fallback to basic minification if terser fails
        const basicMinified = code
          .replace(/\/\/.*$/gm, '')           // Remove single line comments
          .replace(/\/\*[\s\S]*?\*\//g, '')   // Remove multi-line comments
          .replace(/\s+/g, ' ')               // Collapse whitespace
          .replace(/^\s+|\s+$/gm, '')         // Trim line starts/ends
          .trim();                             // Trim the entire string
        
        fs.writeFileSync(outputPath, basicMinified);
        console.log(`Basic minification applied: ${filePath} -> ${outputPath}`);
      }
    }
  } catch (error) {
    console.error('Error in JavaScript minification:', error);
  }
}

// Advanced CSS optimization
function optimizeCSS() {
  try {
    console.log('Optimizing CSS...');
    
    // Get all CSS files recursively
    const cssDir = 'client/public/css';
    const cssFiles = getAllFiles(cssDir)
      .filter(file => file.endsWith('.css') && !file.includes('.min.css'));
    
    if (cssFiles.length === 0) {
      console.log('No CSS files found to optimize.');
      return;
    }
    
    console.log(`Found ${cssFiles.length} CSS files to optimize.`);
    createDirIfNotExists('client/public/css/min');
    
    // Process each CSS file with advanced optimizations
    for (const inputPath of cssFiles) {
      const outputPath = getOutputPath(inputPath, cssDir, path.join(cssDir, 'min'));
      
      // Read the CSS file
      const cssContent = fs.readFileSync(inputPath, 'utf8');
      
      // Advanced CSS minification
      const minifiedCSS = cssContent
        // Remove comments (but keep important ones with /*!*/)
        .replace(/\/\*(?!!)[^*]*\*+([^/*][^*]*\*+)*\//g, '')
        
        // Remove whitespace
        .replace(/\s+/g, ' ')
        
        // Remove spaces around selectors, brackets, etc.
        .replace(/\s*([{}:;,])\s*/g, '$1')
        
        // Remove trailing semicolons
        .replace(/;\}/g, '}')
        
        // Remove leading zeros from decimal values
        .replace(/(\s|:)0\.(\d+)/g, '$1.$2')
        
        // Convert rgb colors to hex where possible
        .replace(/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi, function(match, r, g, b) {
          // Only convert if all values are 0-255
          if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
            return '#' + 
              ('0' + parseInt(r, 10).toString(16)).slice(-2) + 
              ('0' + parseInt(g, 10).toString(16)).slice(-2) + 
              ('0' + parseInt(b, 10).toString(16)).slice(-2);
          }
          return match;
        })
        
        // Shorten hex colors from #rrggbb to #rgb where possible
        .replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3/gi, '#$1$2$3')
        
        // Remove units from zero values
        .replace(/(\s|:)0(px|pt|rem|em|vh|vw|%)/g, '$10')
        
        // Trim final result
        .trim();
      
      fs.writeFileSync(outputPath, minifiedCSS);
      console.log(`Minified CSS: ${inputPath} -> ${outputPath}`);
    }
    
    console.log('CSS optimization completed.');
  } catch (error) {
    console.error('Error optimizing CSS:', error);
  }
}

// Function to optimize image references in HTML and CSS files
function optimizeImgReferences() {
  try {
    console.log('Scanning for image references...');
    
    // Find all HTML files
    const clientDir = 'client';
    const htmlFiles = [
      path.join(clientDir, 'index.html'),
      ...getAllFiles(clientDir).filter(file => file.endsWith('.html') && file !== path.join(clientDir, 'index.html'))
    ];
    
    // Find all CSS files, including minified ones
    const cssFiles = getAllFiles(clientDir).filter(file => file.endsWith('.css'));
    
    // All files to process
    const filesToProcess = [...htmlFiles, ...cssFiles];
    
    console.log(`Found ${filesToProcess.length} files to scan for image references.`);
    
    // Process each file
    filesToProcess.forEach(filePath => {
      try {
        if (fs.existsSync(filePath)) {
          let content = fs.readFileSync(filePath, 'utf8');
          
          // Check if file has image references
          if (content.includes('src=') || content.includes('background-image') || content.includes('url(')) {
            console.log(`Analyzing image references in: ${filePath}`);
            
            // Add width and height attributes for images in HTML if needed
            if (filePath.endsWith('.html')) {
              content = content.replace(
                /<img([^>]*)src=["']([^"']*)["']([^>]*)>/gi,
                (match, before, src, after) => {
                  // Skip if it already has width and height
                  if (match.includes('width=') && match.includes('height=')) {
                    return match;
                  }
                  
                  // Add loading="lazy" attribute if not already present
                  if (!match.includes('loading=')) {
                    after = after + ' loading="lazy"';
                  }
                  
                  // Add decoding="async" if not already present
                  if (!match.includes('decoding=')) {
                    after = after + ' decoding="async"';
                  }
                  
                  return `<img${before}src="${src}"${after}>`;
                }
              );
            }
            
            // Add webp image formats for CSS background images
            if (filePath.endsWith('.css') && !filePath.includes('.min.css')) {
              content = content.replace(
                /background-image\s*:\s*url\(['"]?([^'")]+(?:\.png|\.jpg|\.jpeg))['"]?\)/gi,
                (match, imgPath) => {
                  // Keep original but suggest WebP in comment
                  return `${match} /* Consider using WebP format for better performance */`;
                }
              );
            }
            
            fs.writeFileSync(filePath, content);
          }
        }
      } catch (err) {
        console.error(`Error processing file ${filePath}:`, err);
      }
    });
    
    console.log('Image reference optimization completed.');
  } catch (error) {
    console.error('Error in image reference optimization:', error);
  }
}

// Function to copy and structure public directories
function preparePublicDirectories() {
  console.log('Preparing public directories...');
  
  // Create necessary directories
  createDirIfNotExists('client/public/js/min');
  createDirIfNotExists('client/public/css/min');
  
  // Check if there are JS files in the source directory
  if (!fs.existsSync('client/public/js')) {
    console.log('Creating public JS directory and sample file');
    createDirIfNotExists('client/public/js');
    
    // Create sample JS file if needed
    const sampleJsContent = `
// Utility functions for Nishav Business Solutions
document.addEventListener('DOMContentLoaded', function() {
  console.log('Nishav Business Solutions - External JS Loaded');
});`;
    
    fs.writeFileSync('client/public/js/utilities.js', sampleJsContent);
  }
  
  // Check if there are CSS files in the source directory
  if (!fs.existsSync('client/public/css')) {
    console.log('Creating public CSS directory and sample file');
    createDirIfNotExists('client/public/css');
    
    // Create sample CSS file if needed
    const sampleCssContent = `
/* Additional styles for Nishav Business Solutions */
.text-highlight {
  color: #2563eb;
  font-weight: 600;
}
.section-special {
  background-color: rgba(37, 99, 235, 0.05);
  padding: 2rem;
  border-radius: 0.5rem;
}`;
    
    fs.writeFileSync('client/public/css/styles.css', sampleCssContent);
  }
}

// Function to generate WebP versions of all images
async function convertImagesToWebp() {
  try {
    console.log('Starting image conversion to WebP...');
    
    // Need to install sharp for server-side image processing
    // This would need to be added to package.json dependencies and installed
    // The function relies on a command-line tool as a fallback
    
    // Define image directories to scan
    const imageDirectories = [
      'client/public/images',
      'attached_assets',
      'client/src/assets'
    ];
    
    // Get all image files from directories
    let imageFiles = [];
    
    for (const dir of imageDirectories) {
      if (fs.existsSync(dir)) {
        const files = getAllFiles(dir)
          .filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
          });
        
        imageFiles = [...imageFiles, ...files];
      }
    }
    
    if (imageFiles.length === 0) {
      console.log('No images found to convert to WebP format.');
      return;
    }
    
    console.log(`Found ${imageFiles.length} images to convert to WebP format.`);
    
    // Convert each image to WebP using node-canvas as a fallback
    // In a real environment, we would use sharp or another dedicated library
    for (const imagePath of imageFiles) {
      try {
        const webpPath = imagePath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
        
        // Skip if WebP version already exists
        if (fs.existsSync(webpPath)) {
          console.log(`WebP version already exists: ${webpPath}`);
          continue;
        }
        
        console.log(`Would convert: ${imagePath} -> ${webpPath}`);
        console.log('Note: Actual conversion requires sharp or cwebp tools');
        
        // This is where we would implement the actual conversion
        // Example code (commented out as we don't have sharp):
        /*
        const sharp = require('sharp');
        await sharp(imagePath)
          .webp({ quality: 80 })
          .toFile(webpPath);
        console.log(`Converted: ${imagePath} -> ${webpPath}`);
        */
      } catch (err) {
        console.error(`Error converting ${imagePath} to WebP:`, err);
      }
    }
    
    console.log('Image conversion to WebP format completed.');
  } catch (error) {
    console.error('Error in image conversion to WebP:', error);
  }
}

// Function to add cache control headers to server
function addCacheControlHeaders() {
  console.log('Adding cache control headers configuration...');
  
  const nginxConfPath = 'server/nginx.conf';
  
  // Create nginx config if it doesn't exist
  if (!fs.existsSync(nginxConfPath)) {
    const nginxConfig = `# Nginx configuration for optimal caching
server {
    listen 80;
    server_name nishavbusiness.com www.nishavbusiness.com;
    
    # Redirect to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name nishavbusiness.com www.nishavbusiness.com;
    
    # SSL configuration would go here
    
    # Root directory
    root /var/www/nishavbusiness.com;
    index index.html;
    
    # Cache control for static assets
    location ~* \\.(jpg|jpeg|webp|png|gif|ico|css|js|svg)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }
    
    # Cache control for fonts
    location ~* \\.(woff|woff2|ttf|otf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }
    
    # HTML and data files - shorter cache
    location ~* \\.(html|json|xml)$ {
        expires 1d;
        add_header Cache-Control "public, max-age=86400, must-revalidate";
    }
    
    # Disable directory listing
    autoindex off;
    
    # Security headers
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;
    add_header X-XSS-Protection "1; mode=block";
    
    # gzip compression
    gzip on;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_proxied any;
    gzip_types
        application/atom+xml
        application/javascript
        application/json
        application/ld+json
        application/manifest+json
        application/rss+xml
        application/vnd.geo+json
        application/vnd.ms-fontobject
        application/x-font-ttf
        application/x-web-app-manifest+json
        application/xhtml+xml
        application/xml
        font/opentype
        image/bmp
        image/svg+xml
        image/x-icon
        text/cache-manifest
        text/css
        text/plain
        text/vcard
        text/vnd.rim.location.xloc
        text/vtt
        text/x-component
        text/x-cross-domain-policy;
}`;
    
    fs.writeFileSync(nginxConfPath, nginxConfig);
    console.log(`Created Nginx configuration at ${nginxConfPath}`);
  } else {
    console.log('Nginx configuration already exists, skipping...');
  }
  
  // Also create an .htaccess file for Apache servers
  const htaccessPath = 'client/public/.htaccess';
  
  if (!fs.existsSync(htaccessPath)) {
    const htaccessContent = `# Apache configuration for optimal caching

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

# Set cache control headers
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
  
  # CSS, JavaScript
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  
  # Fonts
  ExpiresByType application/vnd.ms-fontobject "access plus 1 year"
  ExpiresByType application/x-font-ttf "access plus 1 year"
  ExpiresByType application/x-font-opentype "access plus 1 year"
  ExpiresByType application/x-font-woff "access plus 1 year"
  ExpiresByType application/font-woff2 "access plus 1 year"
  
  # Others
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType application/json "access plus 1 day"
  ExpiresByType text/html "access plus 1 day"
</IfModule>

# Disable directory listing
Options -Indexes

# Prevent directory traversal attacks
Options +FollowSymLinks
Options -SymLinksIfOwnerMatch

# Add security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Block access to sensitive files
<FilesMatch "^\\.(htaccess|htpasswd|ini|log|yml|yaml|xml|sh|conf)$">
  Order Allow,Deny
  Deny from all
</FilesMatch>

# Block bad bots
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP_USER_AGENT} ^.*(bot|crawler|spider|baidu|bing|google|msn|facebook|yahoo|scooter|ahrefs|semrush).*$ [NC]
  RewriteRule .* - [F]
</IfModule>
`;
    
    fs.writeFileSync(htaccessPath, htaccessContent);
    console.log(`Created .htaccess file at ${htaccessPath}`);
  } else {
    console.log('.htaccess already exists, skipping...');
  }
}

// Main function
/**
 * Copy root files to dist directory for deployment
 */
function copyRootFiles() {
  console.log('Copying root files for deployment...');
  
  // Files in the root directory that should be copied
  const rootFiles = [
    'generated-icon.png',
    // Add other root files that need to be copied here
  ];
  
  const rootDir = path.resolve(__dirname, '..');
  const distPublicDir = path.resolve(rootDir, 'dist/public');
  
  // Make sure destination directory exists
  createDirIfNotExists(distPublicDir);
  
  // Copy each file
  for (const file of rootFiles) {
    const sourcePath = path.join(rootDir, file);
    const destPath = path.join(distPublicDir, file);
    
    if (fs.existsSync(sourcePath)) {
      try {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied: ${sourcePath} -> ${destPath}`);
      } catch (err) {
        console.error(`Error copying file ${sourcePath}:`, err);
      }
    } else {
      console.warn(`Warning: Root file not found: ${sourcePath}`);
    }
  }
}

/**
 * Copy attached assets to images directory
 */
function copyAttachedAssets() {
  console.log('Copying attached assets to images directory...');
  
  const rootDir = path.resolve(__dirname, '..');
  const sourceDir = path.resolve(rootDir, 'attached_assets');
  const destDir = path.resolve(rootDir, 'dist/public/images');
  
  // Skip if source directory doesn't exist
  if (!fs.existsSync(sourceDir)) {
    console.warn(`Warning: attached_assets directory not found: ${sourceDir}`);
    return;
  }
  
  // Create destination directory if it doesn't exist
  createDirIfNotExists(destDir);
  
  // Copy all files from attached_assets to dist/public/images
  const files = fs.readdirSync(sourceDir);
  let copiedCount = 0;
  
  for (const file of files) {
    // Skip hidden files
    if (file.startsWith('.')) {
      continue;
    }
    
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    
    // Only copy files, not directories
    if (fs.statSync(sourcePath).isFile()) {
      try {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied: ${sourcePath} -> ${destPath}`);
        copiedCount++;
      } catch (err) {
        console.error(`Error copying file ${sourcePath}:`, err);
      }
    }
  }
  
  console.log(`Copied ${copiedCount} files from attached_assets to dist/public/images`);
}

async function optimize() {
  console.log('Starting optimization process...');
  
  // Prepare public directories
  preparePublicDirectories();
  
  // Minify JavaScript files
  await minifyJsFiles('client/public/js', 'client/public/js/min');
  
  // Optimize CSS
  optimizeCSS();
  
  // Optimize image references
  optimizeImgReferences();
  
  // Convert images to WebP format
  await convertImagesToWebp();
  
  // Add cache control headers
  addCacheControlHeaders();
  
  // Copy root files for deployment
  copyRootFiles();
  
  // Copy attached assets to images directory
  copyAttachedAssets();
  
  console.log('Optimization completed!');
  console.log('To use the optimized files, reference them in your HTML as:');
  console.log('- CSS: <link rel="stylesheet" href="/css/min/styles.min.css">');
  console.log('- JS: <script src="/js/min/utilities.min.js"></script>');
  console.log('- Images: Consider using the OptimizedImage component for automatic WebP support');
}

// Run the optimization
optimize().catch(console.error);