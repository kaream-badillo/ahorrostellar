#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting AhorroStellar Development Server...\n');

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

  console.log('🔧 Starting development server...');
  console.log('🌐 Server will be available at: http://localhost:3000');
  console.log('📱 Open your browser to view the application');
  console.log('🔄 Hot reload is enabled - changes will be reflected automatically\n');

  // Iniciar servidor de desarrollo
  const devProcess = spawn('npm', ['run', 'dev'], { 
    stdio: 'inherit',
    shell: true 
  });

  // Manejar cierre del proceso
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping development server...');
    devProcess.kill('SIGINT');
    process.exit(0);
  });

  devProcess.on('error', (error) => {
    console.error('❌ Development server failed:', error.message);
    process.exit(1);
  });

} catch (error) {
  console.error('❌ Development server failed:', error.message);
  process.exit(1);
}
