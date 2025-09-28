# Smart Contracts - AhorroStellar

## 🔗 Descripción
Contratos inteligentes Soroban para la plataforma AhorroStellar, desarrollados en Rust.

## 🏗️ Estructura
```
contracts/
├── src/                  # Código fuente Rust
│   ├── staking.rs       # Contrato de Staking
│   ├── voting.rs        # Contrato de Votación
│   └── rewards.rs       # Contrato de Recompensas
├── tests/               # Tests de contratos
├── Cargo.toml           # Dependencias Rust
└── README.md            # Documentación
```

## 🎯 Contratos Principales

### **Staking Contract**
- Maneja el bloqueo temporal de USDC
- Calcula intereses y recompensas
- Gestiona el desbloqueo de fondos

### **Voting Contract**
- Registra votos de usuarios
- Calcula peso de votos por stake
- Gestiona resultados de votación

### **Rewards Contract**
- Distribuye recompensas por participación
- Calcula reputación de usuarios
- Maneja bonus por proyectos exitosos

## 🛠️ Desarrollo

### **Prerrequisitos**
```bash
# Instalar Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Instalar Soroban CLI
cargo install soroban-cli
```

### **Comandos**
```bash
# Build contratos
soroban contract build

# Test contratos
cargo test

# Deploy a testnet
soroban contract deploy --source-account YOUR_ACCOUNT
```

## 🔧 Tecnologías
- **Rust** - Lenguaje de programación
- **Soroban** - Plataforma de contratos inteligentes
- **Stellar SDK** - Integración con Stellar

## 📋 Estado del Desarrollo
- [ ] Staking Contract - En desarrollo
- [ ] Voting Contract - En desarrollo  
- [ ] Rewards Contract - En desarrollo
- [ ] Tests - Pendiente
- [ ] Deploy - Pendiente