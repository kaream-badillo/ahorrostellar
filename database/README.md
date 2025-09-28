# Database - AhorroStellar

## 🗄️ Descripción
Esquema de base de datos y migraciones para la plataforma AhorroStellar.

## 🏗️ Estructura
```
database/
├── migrations/          # Migraciones de base de datos
├── seeds/               # Datos de ejemplo
├── schema.sql           # Esquema completo
└── README.md            # Documentación
```

## 📊 Esquema de Base de Datos

### **Tablas Principales**

#### **users**
- `id` - UUID único
- `public_key` - Clave pública Stellar
- `created_at` - Fecha de creación
- `updated_at` - Fecha de actualización

#### **projects**
- `id` - UUID único
- `title` - Título del proyecto
- `description` - Descripción
- `university` - Universidad
- `target_amount` - Monto objetivo
- `current_amount` - Monto actual
- `status` - Estado del proyecto

#### **stakes**
- `id` - UUID único
- `user_id` - ID del usuario
- `project_id` - ID del proyecto
- `amount` - Cantidad stakeada
- `asset_type` - Tipo de asset (USDC)
- `status` - Estado del stake

#### **votes**
- `id` - UUID único
- `user_id` - ID del usuario
- `project_id` - ID del proyecto
- `stake_id` - ID del stake
- `created_at` - Fecha de voto

#### **user_stats**
- `id` - UUID único
- `user_id` - ID del usuario
- `total_staked` - Total stakeado
- `total_votes` - Total de votos
- `reputation_score` - Puntuación de reputación
- `level` - Nivel del usuario

## 🚀 Setup

### **Prerrequisitos**
```bash
# Instalar PostgreSQL
# Windows: https://www.postgresql.org/download/windows/
# macOS: brew install postgresql
# Linux: sudo apt-get install postgresql
```

### **Configuración**
```bash
# Crear base de datos
createdb ahorrostellar

# Ejecutar esquema
psql ahorrostellar < schema.sql

# Ejecutar seeds (opcional)
psql ahorrostellar < seeds/sample_data.sql
```

### **Variables de Entorno**
```bash
DATABASE_URL=postgresql://user:password@localhost:5432/ahorrostellar
```

## 🔧 Migraciones

### **Crear Migración**
```bash
# Crear nueva migración
touch migrations/001_create_users_table.sql
```

### **Ejecutar Migraciones**
```bash
# Ejecutar todas las migraciones
psql ahorrostellar < migrations/001_create_users_table.sql
```

## 🌱 Seeds

### **Datos de Ejemplo**
- Usuarios de prueba
- Proyectos de ejemplo
- Stakes de demostración
- Votos de prueba

### **Ejecutar Seeds**
```bash
# Ejecutar seeds
psql ahorrostellar < seeds/sample_data.sql
```

## 📋 Índices

### **Índices Creados**
- `idx_users_public_key` - Búsqueda por clave pública
- `idx_stakes_user_id` - Stakes por usuario
- `idx_stakes_project_id` - Stakes por proyecto
- `idx_votes_user_id` - Votos por usuario
- `idx_votes_project_id` - Votos por proyecto

## 🔒 Seguridad

### **Buenas Prácticas**
- Usar UUIDs para IDs
- Índices en campos de búsqueda
- Constraints de integridad
- Validación de datos

### **Backup**
```bash
# Crear backup
pg_dump ahorrostellar > backup.sql

# Restaurar backup
psql ahorrostellar < backup.sql
```