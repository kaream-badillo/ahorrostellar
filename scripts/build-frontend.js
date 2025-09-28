#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Building AhorroStellar Frontend...\n');

try {
  // Verificar que estamos en el directorio correcto
  const packageJsonPath = path.join(__dirname, '..', 'frontend', 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error('❌ Frontend package.json not found. Run npm run setup first.');
  }

  // Cambiar al directorio frontend
  process.chdir(path.join(__dirname, '..', 'frontend'));

  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('🔨 Building Next.js application...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('✅ Build completed successfully!');
  console.log('📁 Build output: frontend/.next/');
  console.log('🚀 Ready for deployment!');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
