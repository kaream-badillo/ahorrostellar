# Scripts - AhorroStellar

## 🚀 Descripción
Scripts de automatización para desarrollo, build y deployment de AhorroStellar.

## 🏗️ Estructura
```
scripts/
├── setup.js             # Configuración inicial
├── dev-frontend.js      # Servidor de desarrollo
├── build-frontend.js    # Build de producción
├── deploy.js            # Deploy automático
└── README.md            # Documentación
```

## 📋 Scripts Disponibles

### **setup.js**
- **Propósito**: Configuración inicial del proyecto
- **Funciones**:
  - Instalar dependencias
  - Crear archivos de configuración
  - Configurar variables de entorno
  - Verificar prerrequisitos

### **dev-frontend.js**
- **Propósito**: Servidor de desarrollo
- **Funciones**:
  - Iniciar Next.js dev server
  - Configurar hot reload
  - Abrir navegador automáticamente
  - Mostrar logs de desarrollo

### **build-frontend.js**
- **Propósito**: Build de producción
- **Funciones**:
  - Compilar Next.js
  - Optimizar assets
  - Generar bundle
  - Verificar build

### **deploy.js**
- **Propósito**: Deploy automático
- **Funciones**:
  - Build de producción
  - Deploy a Vercel
  - Configurar variables de entorno
  - Verificar deployment

## 🛠️ Uso

### **Setup Inicial**
```bash
# Configurar proyecto
npm run setup

# Verificar configuración
npm run setup -- --check
```

### **Desarrollo**
```bash
# Servidor de desarrollo
npm run dev

# Con puerto específico
npm run dev -- --port 3001
```

### **Build**
```bash
# Build de producción
npm run build

# Build con análisis
npm run build -- --analyze
```

### **Deploy**
```bash
# Deploy a producción
npm run deploy

# Deploy a staging
npm run deploy -- --env staging
```

## 🔧 Configuración

### **Variables de Entorno**
```bash
# .env.local
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_SOROBAN_RPC=https://soroban-testnet.stellar.org
DATABASE_URL=postgresql://user:password@localhost:5432/ahorrostellar
```

### **Scripts Personalizados**
```javascript
// package.json
{
  "scripts": {
    "setup": "node scripts/setup.js",
    "dev": "node scripts/dev-frontend.js",
    "build": "node scripts/build-frontend.js",
    "deploy": "node scripts/deploy.js"
  }
}
```

## 🎯 Funcionalidades

### **Setup Script**
- ✅ Verificar Node.js y npm
- ✅ Instalar dependencias
- ✅ Crear archivos de configuración
- ✅ Configurar variables de entorno
- ✅ Verificar estructura del proyecto

### **Dev Script**
- ✅ Iniciar servidor de desarrollo
- ✅ Configurar hot reload
- ✅ Abrir navegador automáticamente
- ✅ Mostrar logs en tiempo real
- ✅ Configurar proxy para API

### **Build Script**
- ✅ Compilar Next.js
- ✅ Optimizar imágenes
- ✅ Minificar CSS/JS
- ✅ Generar sitemap
- ✅ Verificar bundle size

### **Deploy Script**
- ✅ Build de producción
- ✅ Deploy a Vercel
- ✅ Configurar variables de entorno
- ✅ Verificar deployment
- ✅ Notificar resultado

## 🚨 Troubleshooting

### **Errores Comunes**
- **Node version**: Verificar Node.js 20.x+
- **Dependencies**: Ejecutar `npm install`
- **Port conflict**: Cambiar puerto con `--port`
- **Build errors**: Verificar TypeScript errors

### **Debug**
```bash
# Debug con logs
npm run dev -- --debug

# Verbose output
npm run build -- --verbose
```

## 📋 Checklist de Scripts

### **Setup**
- [ ] Node.js 20.x+ instalado
- [ ] npm 10.x+ instalado
- [ ] Dependencias instaladas
- [ ] Variables de entorno configuradas
- [ ] Estructura del proyecto verificada

### **Development**
- [ ] Servidor de desarrollo funcionando
- [ ] Hot reload configurado
- [ ] Navegador abriendo automáticamente
- [ ] Logs mostrándose correctamente

### **Build**
- [ ] Compilación exitosa
- [ ] Assets optimizados
- [ ] Bundle size dentro de límites
- [ ] No errores de TypeScript

### **Deploy**
- [ ] Build de producción exitoso
- [ ] Deploy a Vercel completado
- [ ] Variables de entorno configuradas
- [ ] Aplicación funcionando en producción
