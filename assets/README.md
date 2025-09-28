# Assets - AhorroStellar

## 🎨 Descripción
Recursos estáticos y assets para la aplicación AhorroStellar.

## 🏗️ Estructura
```
assets/
├── images/              # Imágenes e iconos
├── fonts/               # Fuentes personalizadas
├── videos/              # Videos y demos
└── README.md            # Documentación
```

## 📁 Tipos de Assets

### **images/**
- **Iconos** - SVG optimizados para web
- **Logos** - Marcas y branding
- **Ilustraciones** - Gráficos y diagramas
- **Screenshots** - Capturas de pantalla
- **Banners** - Imágenes promocionales

### **fonts/**
- **Fuentes personalizadas** - Tipografías únicas
- **Icon fonts** - Fuentes de iconos
- **Web fonts** - Fuentes optimizadas para web

### **videos/**
- **Demos** - Videos de demostración
- **Tutoriales** - Videos educativos
- **Presentaciones** - Videos de pitch

## 🎯 Guidelines

### **Imágenes**
- **Formato**: WebP preferido, PNG/JPG como fallback
- **Optimización**: Comprimir y redimensionar
- **Naming**: kebab-case (ej: `user-avatar.png`)
- **Alt text**: Incluir descripción para accesibilidad

### **Fuentes**
- **Formato**: WOFF2 preferido, WOFF como fallback
- **Peso**: Mantener bajo para performance
- **Licencias**: Verificar derechos de uso

### **Videos**
- **Formato**: MP4 con H.264
- **Compresión**: Optimizar para web
- **Subtítulos**: Incluir para accesibilidad

## 🚀 Uso en la Aplicación

### **Importar Assets**
```typescript
// Imágenes
import logo from '../assets/images/logo.svg';
import avatar from '../assets/images/user-avatar.png';

// Fuentes
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
```

### **Optimización**
- **Lazy loading** para imágenes grandes
- **Responsive images** con diferentes tamaños
- **Preload** para assets críticos

## 📋 Checklist de Assets

### **Imágenes**
- [ ] Optimizadas para web
- [ ] Alt text incluido
- [ ] Responsive (diferentes tamaños)
- [ ] Formato correcto (WebP/PNG)

### **Fuentes**
- [ ] Licencia verificada
- [ ] Peso optimizado
- [ ] Fallbacks incluidos
- [ ] Preload configurado

### **Videos**
- [ ] Compresión optimizada
- [ ] Subtítulos incluidos
- [ ] Thumbnail generado
- [ ] Lazy loading configurado