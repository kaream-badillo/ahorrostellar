# Utilities - AhorroStellar

## 🛠️ Descripción
Utilidades compartidas y funciones helper para toda la aplicación AhorroStellar.

## 🏗️ Estructura
```
utils/
├── stellar.ts           # Utilidades de Stellar
├── reflector.ts         # Cliente de Reflector Oracle
├── friendbot.ts         # Utilidades de Friendbot
└── README.md            # Documentación
```

## 📋 Archivos de Utilidades

### **stellar.ts**
- Funciones para manejo de cuentas Stellar
- Utilidades para transacciones
- Helpers para Stellar SDK

### **reflector.ts**
- Cliente para Reflector Oracle
- Funciones para obtener precios
- Manejo de errores y fallbacks

### **friendbot.ts**
- Utilidades para obtener fondos de prueba
- Funciones de funding automático
- Helpers para testnet

## 🔧 Uso

### **Stellar Utilities**
```typescript
import { createAccount, getBalance } from '../utils/stellar';

// Crear cuenta
const account = await createAccount();

// Obtener balance
const balance = await getBalance(publicKey);
```

### **Reflector Oracle**
```typescript
import { getUSDCPrice, getCLPRate } from '../utils/reflector';

// Obtener precio USDC
const usdcPrice = await getUSDCPrice();

// Obtener tasa CLP
const clpRate = await getCLPRate();
```

### **Friendbot**
```typescript
import { fundAccount } from '../utils/friendbot';

// Obtener fondos de prueba
await fundAccount(publicKey);
```

## 🎯 Funciones Principales

### **Stellar**
- `createAccount()` - Crear nueva cuenta
- `getBalance()` - Obtener balance
- `buildTransaction()` - Construir transacción
- `signTransaction()` - Firmar transacción

### **Reflector**
- `getUSDCPrice()` - Precio USDC/USD
- `getCLPRate()` - Tasa USD/CLP
- `getXLMPrice()` - Precio XLM/USD
- `getAllPrices()` - Todos los precios

### **Friendbot**
- `fundAccount()` - Obtener fondos
- `checkBalance()` - Verificar balance
- `waitForFunding()` - Esperar funding

## 🚀 Beneficios
- **Reutilización** - Funciones compartidas
- **Consistencia** - Lógica centralizada
- **Mantenimiento** - Fácil actualización
- **Testing** - Funciones testeadas
