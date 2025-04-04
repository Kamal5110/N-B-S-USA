/**
 * This script renames image files by removing spaces and special characters
 * to ensure better compatibility across different environments.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to rename files in a directory
function renameFiles(directory) {
  console.log(`Processing directory: ${directory}`);
  
  // Read all files in the directory
  const files = fs.readdirSync(directory);
  
  // Process each file
  const renamedFiles = {};
  
  files.forEach(filename => {
    const filePath = path.join(directory, filename);
    
    // Check if it's a file
    if (fs.statSync(filePath).isFile()) {
      // Generate a new filename without spaces and special characters
      const extension = path.extname(filename);
      const nameWithoutExt = path.basename(filename, extension);
      
      // Replace spaces and special characters with underscores
      const normalizedName = nameWithoutExt
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/_+/g, '_') // Replace multiple underscores with a single one
        .toLowerCase();
      
      const newFilename = normalizedName + extension.toLowerCase();
      const newFilePath = path.join(directory, newFilename);
      
      // Skip if the file already has a clean name
      if (filename === newFilename) {
        console.log(`Skipping ${filename} - already has clean name`);
        return;
      }
      
      // Rename the file
      try {
        fs.copyFileSync(filePath, newFilePath);
        console.log(`Renamed ${filename} to ${newFilename}`);
        renamedFiles[filename] = newFilename;
      } catch (error) {
        console.error(`Error renaming ${filename}:`, error);
      }
    }
  });
  
  return renamedFiles;
}

// Function to copy renamed files to public/images
function copyToPublic(sourceDir, renamedFiles) {
  console.log('Copying renamed files to public/images directory...');
  
  // Get the root directory of the project
  const rootDir = path.resolve(__dirname, '..');
  const targetDir = path.join(rootDir, 'client', 'public', 'images');
  
  console.log(`Target directory: ${targetDir}`);
  
  // Ensure the target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`Created target directory: ${targetDir}`);
  }
  
  // Copy each renamed file to the public directory
  Object.entries(renamedFiles).forEach(([originalName, newName]) => {
    const sourcePath = path.join(sourceDir, newName);
    const targetPath = path.join(targetDir, newName);
    
    try {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied ${newName} to public/images directory`);
    } catch (error) {
      console.error(`Error copying ${newName}:`, error);
    }
  });
}

// Main function
function main() {
  // Get the root directory of the project (one level up from scripts directory)
  const rootDir = path.resolve(__dirname, '..');
  const sourceDir = path.join(rootDir, 'attached_assets');
  
  console.log(`Root directory: ${rootDir}`);
  console.log(`Source directory: ${sourceDir}`);
  
  // Rename files and get a mapping of old to new filenames
  const renamedFiles = renameFiles(sourceDir);
  
  // Copy the renamed files to the public directory
  copyToPublic(sourceDir, renamedFiles);
  
  // Print a summary of renamed files for updating references in code
  console.log('\nFile Rename Summary (for updating in code):');
  Object.entries(renamedFiles).forEach(([originalName, newName]) => {
    console.log(`"${originalName}" -> "${newName}"`);
  });
}

// Run the script
main();