// Database Configuration
export const databaseConfig = {
  url: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/ahorrostellar',
  ssl: process.env.NODE_ENV === 'production',
  pool: {
    min: 2,
    max: 10,
    acquireTimeoutMillis: 30000,
    createTimeoutMillis: 30000,
    destroyTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 200,
  },
} as const;
