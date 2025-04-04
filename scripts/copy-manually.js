import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper function to create directory if it doesn't exist
const createDirIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

/**
 * Copy attached assets to client/public/images directory
 * This helps us during development to immediately see the assets
 */
function copyAttachedAssets() {
  console.log('Copying attached assets to public/images directory for development...');
  
  const rootDir = path.resolve(__dirname, '..');
  const sourceDir = path.resolve(rootDir, 'attached_assets');
  const destDir = path.resolve(rootDir, 'client/public/images');
  
  // Skip if source directory doesn't exist
  if (!fs.existsSync(sourceDir)) {
    console.warn(`Warning: attached_assets directory not found: ${sourceDir}`);
    return;
  }
  
  // Create destination directory if it doesn't exist
  createDirIfNotExists(destDir);
  
  // Copy all files from attached_assets to client/public/images
  const files = fs.readdirSync(sourceDir);
  let copiedCount = 0;
  
  for (const file of files) {
    // Skip hidden files
    if (file.startsWith('.')) {
      continue;
    }
    
    const sourcePath = path.join(sourceDir, file);
    
    // Generate normalized filename (same logic as in rename-images.js)
    const extension = path.extname(file);
    const nameWithoutExt = path.basename(file, extension);
    
    // Replace spaces and special characters with underscores
    const normalizedName = nameWithoutExt
      .replace(/[^a-zA-Z0-9]/g, '_')
      .replace(/_+/g, '_') // Replace multiple underscores with a single one
      .toLowerCase();
    
    const newFilename = normalizedName + extension.toLowerCase();
    const destPath = path.join(destDir, newFilename);
    
    // Only copy files, not directories
    if (fs.statSync(sourcePath).isFile()) {
      try {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied: ${file} -> ${newFilename}`);
        copiedCount++;
      } catch (err) {
        console.error(`Error copying file ${sourcePath}:`, err);
      }
    }
  }
  
  console.log(`Copied ${copiedCount} files from attached_assets to client/public/images with normalized filenames`);
  
  // Also copy generated-icon.png if it exists
  const iconSource = path.resolve(rootDir, 'generated-icon.png');
  const iconDest = path.resolve(rootDir, 'client/public/images/generated-icon.png');
  
  if (fs.existsSync(iconSource)) {
    try {
      fs.copyFileSync(iconSource, iconDest);
      console.log(`Copied: ${iconSource} -> ${iconDest}`);
    } catch (err) {
      console.error(`Error copying icon file:`, err);
    }
  } else {
    console.warn(`Warning: generated-icon.png not found at ${iconSource}`);
  }
}

// Execute the copy process
copyAttachedAssets();