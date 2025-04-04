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
 * Copy a file from source to destination
 */
function copyFile(source, destination) {
  try {
    fs.copyFileSync(source, destination);
    console.log(`Copied: ${source} -> ${destination}`);
  } catch (err) {
    console.error(`Error copying file ${source}:`, err);
  }
}

/**
 * Copy directory and its contents recursively
 */
function copyDir(sourceDir, destinationDir, skipHidden = true) {
  // Create destination directory if it doesn't exist
  createDirIfNotExists(destinationDir);
  
  // Read all files in the source directory
  const files = fs.readdirSync(sourceDir);
  
  // Process each file/directory
  for (const file of files) {
    // Skip hidden files if specified
    if (skipHidden && file.startsWith('.')) {
      continue;
    }
    
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destinationDir, file);
    
    // Check if it's a directory or file
    const stats = fs.statSync(sourcePath);
    
    if (stats.isDirectory()) {
      // Recursively copy subdirectory
      copyDir(sourcePath, destPath, skipHidden);
    } else {
      // Copy file
      copyFile(sourcePath, destPath);
    }
  }
}

/**
 * Copy root files to dist directory
 */
function copyRootFiles() {
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
      copyFile(sourcePath, destPath);
    } else {
      console.warn(`Warning: Root file not found: ${sourcePath}`);
    }
  }
}

/**
 * Copy attached assets to images directory
 */
function copyAttachedAssets() {
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
      copyFile(sourcePath, destPath);
      copiedCount++;
    }
  }
  
  console.log(`Copied ${copiedCount} files from attached_assets to dist/public/images with normalized filenames`);
}

/**
 * Main function to copy all assets
 */
function copyAssets() {
  console.log('Starting asset copy process...');
  
  // Copy root files like favicon, etc.
  copyRootFiles();
  
  // Copy attached_assets to public/images
  copyAttachedAssets();
  
  console.log('Asset copy process completed!');
}

// Execute the copy process
copyAssets();