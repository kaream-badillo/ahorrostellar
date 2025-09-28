# Testing Suite - AhorroStellar

## 🧪 Descripción
Suite completa de pruebas para la plataforma AhorroStellar.

## 🏗️ Estructura
```
tests/
├── unit/                # Pruebas unitarias
├── integration/         # Pruebas de integración
├── e2e/                 # Pruebas end-to-end
├── fixtures/            # Datos de prueba
└── README.md            # Documentación
```

## 🎯 Tipos de Pruebas

### **Unit Tests**
- **Componentes React** - Renderizado y comportamiento
- **Hooks personalizados** - Lógica de estado
- **Utilidades** - Funciones helper
- **Stores** - Estado global

### **Integration Tests**
- **API Routes** - Endpoints y respuestas
- **Base de datos** - Operaciones CRUD
- **Stellar SDK** - Integración con blockchain
- **Reflector Oracle** - Obtención de precios

### **E2E Tests**
- **Flujos completos** - Usuario completo
- **Stake temporal** - Proceso de staking
- **Votación** - Sistema de votos
- **Dashboard** - Visualización de datos

## 🛠️ Tecnologías

### **Testing Frameworks**
- **Jest** - Framework principal
- **React Testing Library** - Testing de componentes
- **Cypress** - E2E testing
- **MSW** - Mock Service Worker

### **Testing Utilities**
- **@testing-library/jest-dom** - Matchers personalizados
- **@testing-library/user-event** - Simulación de eventos
- **cypress** - Testing end-to-end
- **msw** - Mocking de APIs

## 🚀 Scripts de Testing

### **Ejecutar Pruebas**
```bash
# Todas las pruebas
npm run test

# Solo unit tests
npm run test:unit

# Solo integration tests
npm run test:integration

# Solo e2e tests
npm run test:e2e

# Con coverage
npm run test:coverage
```

### **Desarrollo**
```bash
# Watch mode
npm run test:watch

# Debug mode
npm run test:debug

# Update snapshots
npm run test:update-snapshots
```

## 📋 Cobertura de Pruebas

### **Objetivos de Cobertura**
- **Líneas**: 80%+
- **Funciones**: 90%+
- **Branches**: 70%+
- **Statements**: 80%+

### **Archivos Críticos**
- **Componentes principales** - 100%
- **Hooks personalizados** - 100%
- **Utilidades** - 100%
- **API routes** - 90%+

## 🔧 Configuración

### **Jest Configuration**
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
  ],
};
```

### **Cypress Configuration**
```javascript
// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
  },
};
```

## 📝 Escribir Pruebas

### **Unit Tests**
```typescript
// Component test
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### **Integration Tests**
```typescript
// API test
import { GET } from '../api/user/[id]/route';

test('GET /api/user/[id] returns user data', async () => {
  const request = new Request('http://localhost:3000/api/user/123');
  const response = await GET(request, { params: { id: '123' } });
  const data = await response.json();
  
  expect(data.id).toBe('123');
  expect(data.name).toBeDefined();
});
```

### **E2E Tests**
```typescript
// Cypress test
describe('Stake Flow', () => {
  it('should allow user to stake USDC', () => {
    cy.visit('/stake');
    cy.get('[data-testid="stake-amount"]').type('100');
    cy.get('[data-testid="stake-button"]').click();
    cy.get('[data-testid="success-message"]').should('be.visible');
  });
});
```

## 🎯 Mejores Prácticas

### **Naming Conventions**
- **Archivos**: `ComponentName.test.tsx`
- **Tests**: `should do something when condition`
- **Describe**: `ComponentName` o `Feature`

### **Test Structure**
- **Arrange** - Preparar datos
- **Act** - Ejecutar acción
- **Assert** - Verificar resultado

### **Mocking**
- **APIs externas** - Mock con MSW
- **Stellar SDK** - Mock de funciones
- **Local storage** - Mock de storage