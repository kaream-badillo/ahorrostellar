```markdown
# 📁 Carpeta `smart-contracts/` – AhorroStellar (Soroban – Versión MVP v0.1)

Este directorio contiene los contratos inteligentes diseñados para **AhorroStellar** en la red **Stellar/Soroban**. Cada contrato está escrito o planificado en **Rust**, compatible con el entorno de Soroban en testnet. Representan la lógica simbólica o ejecutable del sistema: staking, validación de éxito, distribución de recompensas y reputación estudiantil.

---

## 🎯 Propósito general

- Simular o ejecutar staking simbólico sin pérdida.
- Validar cuándo un proyecto universitario “gana”.
- Repartir recompensas simbólicas proporcionalmente.
- Asignar reputación simbólica a estudiantes que eligieron bien.

---

## 📦 Estructura de la carpeta

```bash
/smart-contracts
├── stake_pool.rs              # Lógica para bloquear simbólicamente fondos
├── reward_distributor.rs      # Reparto proporcional de recompensas
├── reputation_trigger.rs      # Activación de reputación simbólica
├── validation_admin.rs        # Validación manual de proyectos exitosos
├── utils/
│   └── roles.rs               # Manejo de permisos para admins/validators

```

---

## 🧠 Explicación funcional de cada contrato

| Archivo | Función |
| --- | --- |
| `stake_pool.rs` | Permite que estudiantes bloqueen una cantidad simbólica para votar por un proyecto. El stake queda registrado en el contrato (sin mover fondos reales). |
| `validation_admin.rs` | Permite a un validador marcar un proyecto como “ganador”. Esto activa la lógica de distribución y reputación. |
| `reward_distributor.rs` | Calcula y ejecuta el reparto simbólico de recompensas a los wallets que respaldaron un proyecto validado. Puede cobrar comisión. |
| `reputation_trigger.rs` | Aumenta la reputación simbólica de un estudiante si su proyecto ganó. Puede emitir badges o niveles simbólicos. |
| `utils/roles.rs` | Módulo compartido para verificar si un address es admin, validador o usuario. |

---

## 🔁 Flujo lógico

1. `stake_pool.rs`: El estudiante bloquea X tokens simbólicos para respaldar un proyecto.
2. `validation_admin.rs`: Un validador marca el proyecto como exitoso (`project_id`, `evidence_url`, `timestamp`).
3. Al activarse la validación:
    - `reward_distributor.rs` reparte la recompensa simbólica proporcional.
    - `reputation_trigger.rs` actualiza la reputación de cada votante.
4. `roles.rs`: asegura que solo actores válidos ejecuten acciones críticas.

---

## 📄 Formato sugerido de datos en Rust

```rust
// Ejemplo de estructura de validación
pub struct ValidationEvent {
    pub project_id: String,
    pub validator: Address,
    pub validation_type: String, // e.g., "hackathon_win"
    pub evidence_url: String,
    pub timestamp: u64,
}

```

---

## ✅ Estado actual

| Componente | Estado |
| --- | --- |
| Contratos escritos | Simulados o en bosquejo |
| Compatible Soroban | ✅ Estructura compatible con testnet |
| Lógica simbólica | ✅ Sí, con posibilidad de ejecución futura |
| Pruebas unitarias | ❌ A definir |
| Integración frontend | Parcial – vía funciones mock/API |

---

## 🚀 Migración futura

Este diseño permite migrar rápidamente a contratos reales:

- ✅ Compatible con Soroban testnet
- ✅ Estructura modular en Rust
- ✅ Roles y validación preparados
- 🔁 Puede integrarse con `soroban-kit` o CLI oficial

---

## 📎 Archivos relacionados

- [`project-context.md`](https://chatgpt.com/project-context.md): estrategia general del MVP
- [`validation-rules.md`](https://chatgpt.com/validation-rules.md): criterios para marcar un proyecto como “ganador”
- [`project-rules.md`](https://chatgpt.com/project-rules.md): requisitos para que un proyecto sea elegible
- [`user-rules.md`](https://chatgpt.com/user-rules.md): reglas de participación estudiantil

---

## 📅 Versión

Versión: `MVP Soroban v0.1`

Última edición: `2025-08-07`

Compatible con: `Soroban testnet` (Rust)

---