# 🔐 README – Smart Contract (Soroban Simulation)

Este contrato simula la distribución de un bonus del 5% al 10% si el proyecto respaldado gana.

## 📄 Función principal

```rust
pub fn distribute_bonus(env: Env, project_id: u64, backers: Vec<Address>, amount: i128) {
    // Simula repartir bonus proporcional entre quienes hicieron stake
}

⚠️ Advertencias
El contrato está desplegado en testnet.

No mueve fondos reales.

Solo simula el comportamiento final para efectos del MVP.

📌 Archivos relevantes
smart-contracts/bonus.rs

smart-contracts/Cargo.toml

scripts/deploy.ts

🧠 Próximos pasos
Activar oracles o triggers de evento real (grants, premios).

Evaluar distribución automática real on-chain.