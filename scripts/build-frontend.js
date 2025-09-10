#!/usr/bin/env node

/**
 * Build script for AhorroStellar Frontend
 * Builds the Next.js application with proper environment setup
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Building AhorroStellar Frontend...');

// Change to frontend directory
process.chdir(path.join(__dirname, '..', 'frontend'));

try {
  // Install dependencies if node_modules doesn't exist
  if (!fs.existsSync('node_modules')) {
    console.log('📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
  }

  // Build the application
  console.log('🔨 Building Next.js application...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('✅ Frontend build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
