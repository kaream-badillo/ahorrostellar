# Configuration - AhorroStellar

## ⚙️ Descripción
Archivos de configuración centralizados para toda la aplicación AhorroStellar.

## 🏗️ Estructura
```
config/
├── environment.ts        # Variables de entorno
├── stellar.ts           # Configuración de Stellar
├── oracle.ts            # Configuración de Reflector Oracle
├── database.ts          # Configuración de base de datos
└── README.md            # Documentación
```

## 📋 Archivos de Configuración

### **environment.ts**
- Variables de entorno centralizadas
- Configuración de redes (testnet/mainnet)
- URLs de APIs y servicios

### **stellar.ts**
- Configuración de red Stellar
- URLs de RPC
- Passphrases de red
- Configuración de Friendbot

### **oracle.ts**
- Direcciones de contratos Reflector
- Configuración de precisión
- Timeouts y reintentos

### **database.ts**
- URL de conexión a base de datos
- Configuración de pool de conexiones
- Configuración SSL

## 🔧 Uso

### **Importar Configuración**
```typescript
import { environment } from '../config/environment';
import { stellarConfig } from '../config/stellar';
import { oracleConfig } from '../config/oracle';
```

### **Variables de Entorno**
```bash
# .env.local
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_SOROBAN_RPC=https://soroban-testnet.stellar.org
DATABASE_URL=postgresql://user:password@localhost:5432/ahorrostellar
```

## 🎯 Beneficios
- **Centralización** - Toda la configuración en un lugar
- **Tipado** - TypeScript para validación
- **Reutilización** - Configuración compartida
- **Mantenimiento** - Fácil actualización
