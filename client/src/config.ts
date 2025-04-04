/**
 * Configuration for base URLs and environment-specific settings
 * 
 * This allows the application to run correctly in different environments:
 * - Local development (localhost)
 * - Production server (absolute URLs)
 * - GitHub Pages (relative URLs in a subdirectory)
 */

// Set this to your GitHub Pages repository name when deploying
// For example, if your GitHub Pages URL is username.github.io/nishav-website/
// then set this to "/nishav-website"
// Leave empty for production server deployment with domain root
const GITHUB_REPO_NAME = "";

// Environment detection
const isGitHubPages = Boolean(GITHUB_REPO_NAME);

// Base URL to use for assets
// - For GitHub Pages: Use relative path starting with repo name
// - For production: Use relative path from root
export const BASE_URL = isGitHubPages 
  ? GITHUB_REPO_NAME             // For GitHub Pages (e.g., "/nishav-website")
  : "";                          // For production server (empty string for root)

// Helper function to construct asset URLs properly
export function assetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${BASE_URL}/${cleanPath}`;
}