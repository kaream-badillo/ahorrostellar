#!/usr/bin/env node

/**
 * Development script for AhorroStellar Frontend
 * Starts the Next.js development server
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting AhorroStellar Frontend Development...');

// Change to frontend directory
process.chdir(path.join(__dirname, '..', 'frontend'));

try {
  // Install dependencies if node_modules doesn't exist
  if (!fs.existsSync('node_modules')) {
    console.log('📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
  }

  // Start development server
  console.log('🔨 Starting Next.js development server...');
  execSync('npm run dev', { stdio: 'inherit' });

} catch (error) {
  console.error('❌ Development server failed:', error.message);
  process.exit(1);
}
