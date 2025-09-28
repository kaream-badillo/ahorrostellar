# 🔧 Configuración de Reflector con Cuenta Lectora READONLY

## 📋 **PASOS PARA CONFIGURAR**

### 1. **Crear Cuenta Lectora**

Ve a [Stellar Laboratory - Account Creator](https://laboratory.stellar.org/#account-creator?network=testnet)

1. Haz clic en **"Generate Keypair"**
2. **Copia la Public Key** (empieza con `G...`)
3. **NO copies la Secret Key** (por seguridad)

### 2. **Fondear la Cuenta**

Ejecuta en terminal (reemplaza `<G...>` con tu public key):

```bash
curl "https://friendbot.stellar.org/?addr=<G...>"
```

Debería devolver algo como:
```json
{
  "hash": "...",
  "result": "success",
  "submission_result": "success"
}
```

### 3. **Configurar Variables de Entorno**

Crea/edita el archivo `.env.local` en la raíz del proyecto:

```env
# Cuenta lectora READONLY (solo publicKey, NO seed)
NEXT_PUBLIC_READONLY_PUBLIC_KEY=GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Stellar Testnet
NEXT_PUBLIC_SOROBAN_RPC_PRIMARY=https://soroban-testnet.stellar.org
NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015

# Reflector Contract IDs
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_USDC=CAVLP5DH2GJPZMVO7IJY4CVOD5MWEFTJFVPD2YY2FQXOQHRGHK4D6HLP
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_FX=CCSSOHTBL3LEWUCBBEB5NJFC2OKFRC74OWEIJIZLRJBGAAU4VMU5NV4W
NEXT_PUBLIC_REFLECTOR_CONTRACT_ID_CEX=CCYOZJCOPG34LLQQ7N24YXBM7LL62R7ONMZ3G6WZAAYPB5OYKOMJRN63
```

### 4. **Reiniciar Servidor**

```bash
rm -rf .next
npm run dev
```

## 🧪 **PRUEBAS**

### Verificar en `/stake`:
- ✅ Debe mostrar **"Modo Lectura"** con precios reales
- ✅ Selector de activos (USDC, CLP, XLM)
- ✅ Precios en tiempo real desde Reflector
- ✅ Botón "Votar-Ahorro (mock)" funcional

### Verificar en consola:
```javascript
// Debe mostrar precios reales sin errores
console.log('USDC/USD:', await priceUSDCinUSD())
console.log('USD/CLP:', await usdPerCLP())
console.log('XLM/USD:', await priceXLMinUSD())
```

## ⚠️ **SEGURIDAD**

- ✅ **Solo publicKey** en `.env.local`
- ❌ **NUNCA** subas secret keys
- ✅ **NO hagas push** de `.env.local` a git
- ✅ **Prueba en rama** antes de merge a main

## 🐛 **SOLUCIÓN DE PROBLEMAS**

### Error: "NEXT_PUBLIC_READONLY_PUBLIC_KEY missing"
- Verifica que `.env.local` existe y tiene la variable
- Reinicia el servidor (`npm run dev`)

### Error: "Account not found"
- La cuenta no está fondeada
- Ejecuta: `curl "https://friendbot.stellar.org/?addr=<G...>"`

### Error: "no retval from simulation"
- Problema con el contrato Reflector
- Verifica que los Contract IDs sean correctos
- Verifica conexión a testnet

### Precios no se cargan
- Verifica conexión a internet
- Verifica que RPC de Soroban esté disponible
- Revisa consola para errores específicos

## ✅ **DEFINICIÓN DE DONE**

- [ ] `/stake` muestra precios reales sin wallet
- [ ] Selector de activos funcional (USDC, CLP, XLM)
- [ ] Precios se actualizan correctamente
- [ ] Stake mock operativo
- [ ] Build sin errores TypeScript
- [ ] No errores en consola
