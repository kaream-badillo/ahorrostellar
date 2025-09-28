# 🚀 Configurar Reflector Real - 5 minutos

## ⚡ Pasos rápidos para usar Reflector de verdad:

### 1. Crear cuenta testnet (2 min)
```bash
# Ir a: https://laboratory.stellar.org/#account-creator?network=testnet
# 1. Click "Generate Keypair"
# 2. Copiar SOLO la Public Key (G...)
# 3. NO copiar la Secret Key (por seguridad)
```

### 2. Fondear cuenta (1 min)
```bash
# Reemplazar <TU_PUBLIC_KEY> con tu clave real
curl "https://friendbot.stellar.org/?addr=<TU_PUBLIC_KEY>"

# Debería devolver:
# {
#   "hash": "...",
#   "result": "success"
# }
```

### 3. Crear .env.local (1 min)
Crear archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
NEXT_PUBLIC_READONLY_PUBLIC_KEY=<TU_PUBLIC_KEY_G...>

# IDs de Reflector (testnet). Si ya existen en tu proyecto, solo verifica:
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_USDC=CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_FX=CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_CEX=CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63

# Demo mode (opcional - para desarrollo local)
NEXT_PUBLIC_DEV_WALLET_MOCK=true
```

**⚠️ IMPORTANTE:**
- No comentes ni cambies los nombres de variables
- No subas este archivo a git
- Reemplaza `<TU_PUBLIC_KEY_G...>` con tu public key real

### 4. Reiniciar servidor (1 min)
```bash
# Parar el servidor (Ctrl+C)
# Luego:
npm run dev
```

## ✅ Verificar que funciona:

1. **Ir a `/reflector-debug`**
2. **Click "Test All Connections"**
3. **Debería mostrar precios reales:**
   - USDC/USD ≈ 1.0
   - XLM/USD ≈ 0.12
   - USD/CLP ≈ 1000

## 🎯 Resultado esperado:

- **Dashboard**: Precios reales de Reflector
- **Stake page**: Precios reales de Reflector  
- **Debug page**: Conexiones verdes ✅

## 🚨 Si no funciona:

1. **Verificar** que la cuenta esté fondeada
2. **Verificar** que `.env.local` tenga la public key correcta
3. **Reiniciar** el servidor después de crear `.env.local`
4. **Revisar** consola del navegador para errores

---

**¡Listo para usar Reflector real! 🏆**
