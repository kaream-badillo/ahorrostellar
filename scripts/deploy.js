#!/usr/bin/env node

/**
 * Deploy script for AhorroStellar Refactored
 * Deploys to Vercel with the new structure
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Deploying AhorroStellar Refactored to Vercel...');

// Check if we're in the right directory
if (!fs.existsSync('frontend') || !fs.existsSync('vercel.json')) {
  console.error('❌ Please run this script from the project root directory');
  process.exit(1);
}

try {
  // Check if Vercel CLI is installed
  try {
    execSync('vercel --version', { stdio: 'pipe' });
  } catch (error) {
    console.log('📦 Installing Vercel CLI...');
    execSync('npm install -g vercel', { stdio: 'inherit' });
  }

  // Login to Vercel (if not already logged in)
  console.log('🔐 Checking Vercel authentication...');
  try {
    execSync('vercel whoami', { stdio: 'pipe' });
    console.log('✅ Already logged in to Vercel');
  } catch (error) {
    console.log('🔐 Please login to Vercel...');
    execSync('vercel login', { stdio: 'inherit' });
  }

  // Deploy to Vercel
  console.log('🚀 Deploying to Vercel...');
  execSync('vercel --prod', { stdio: 'inherit' });

  console.log('✅ Deploy completed successfully!');
  console.log('📝 Your new app is live at the URL shown above');

} catch (error) {
  console.error('❌ Deploy failed:', error.message);
  process.exit(1);
}
