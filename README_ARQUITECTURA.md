# Guía de Estilos y Convenciones para el Proyecto

Esta sección define los estándares de estilo, estructura y buenas prácticas para el desarrollo del proyecto. Seguir estas directrices es fundamental para mantener un código consistente, legible, robusto y fácil de mantener.


- [Guía de Estilos y Convenciones para el Proyecto](#guía-de-estilos-y-convenciones-para-el-proyecto)
  - [1. Nombres de Variables y Funciones](#1-nombres-de-variables-y-funciones)
  - [2. Arquitectura Domain-Centric Modular](#2-arquitectura-domain-centric-modular)
    - [🏗️ Principios Arquitectónicos Fundamentales](#️-principios-arquitectónicos-fundamentales)
      - [**Separación de Responsabilidades por Capas**](#separación-de-responsabilidades-por-capas)
      - [**Flujo de Dependencias**](#flujo-de-dependencias)
    - [📁 Estructura superficial de Directorios](#-estructura-superficial-de-directorios)
    - [🎯 Responsabilidades por Capa](#-responsabilidades-por-capa)
      - [**`core/` - Núcleo del Sistema**](#core---núcleo-del-sistema)
      - [**`domains/` - Entidades de Negocio**](#domains---entidades-de-negocio)
      - [**`features/` - Funcionalidades Transversales**](#features---funcionalidades-transversales)
      - [**`shared/` - Infraestructura**](#shared---infraestructura)
    - [🔄 Patrones de Importación](#-patrones-de-importación)
      - [**Aliases de Importación Configurados**](#aliases-de-importación-configurados)
      - [**Reglas de Dependencias**](#reglas-de-dependencias)
    - [🚀 Guía para Desarrolladores](#-guía-para-desarrolladores)
      - [**Al Crear Nuevos Componentes**](#al-crear-nuevos-componentes)
      - [**Al Crear Nuevos Servicios**](#al-crear-nuevos-servicios)
      - [**Al Crear Nuevos Tipos**](#al-crear-nuevos-tipos)
      - [**Matriz de Decisión Rápida**](#matriz-de-decisión-rápida)
  - [3. Formato de Comentarios](#3-formato-de-comentarios)
  - [4. Uso de Dependencias](#4-uso-de-dependencias)
  - [5. Estilo de Componentes](#5-estilo-de-componentes)
  - [6. Flujo de Trabajo](#6-flujo-de-trabajo)
  - [7. Otros Lineamientos](#7-otros-lineamientos)
- [📚 Documentación Especializada del Proyecto](#-documentación-especializada-del-proyecto)
  - [🎨 PresettedStyles - Sistema de Estilos Prediseñados](#-presettedstyles---sistema-de-estilos-prediseñados)
    - [¿Por qué es fundamental?](#por-qué-es-fundamental)
    - [Importancia para el equipo](#importancia-para-el-equipo)
    - [Cuándo utilizarlo](#cuándo-utilizarlo)
  - [🔧 GenericModal - Sistema de Modales Reutilizables](#-genericmodal---sistema-de-modales-reutilizables)
    - [¿Por qué es esencial?](#por-qué-es-esencial)
    - [Importancia para el equipo](#importancia-para-el-equipo-1)
    - [Cuándo utilizarlo](#cuándo-utilizarlo-1)
  - [📊 GenericTable - Sistema de Tablas Avanzadas](#-generictable---sistema-de-tablas-avanzadas)
    - [¿Por qué es indispensable?](#por-qué-es-indispensable)
    - [Importancia para el equipo](#importancia-para-el-equipo-2)
    - [Cuándo utilizarlo](#cuándo-utilizarlo-2)
  - [🔄 GenericStepper - Sistema de Flujos de Trabajo Multi-Paso](#-genericstepper---sistema-de-flujos-de-trabajo-multi-paso)
    - [¿Por qué es revolucionario?](#por-qué-es-revolucionario)
    - [Importancia para el equipo](#importancia-para-el-equipo-3)
    - [Cuándo utilizarlo](#cuándo-utilizarlo-3)
  - [🚀 Maximizando el Aprovechamiento del Estándar](#-maximizando-el-aprovechamiento-del-estándar)
    - [Para Desarrolladores Nuevos en el Equipo](#para-desarrolladores-nuevos-en-el-equipo)
    - [Para el Equipo en General](#para-el-equipo-en-general)
    - [Beneficios del Estándar Colaborativo](#beneficios-del-estándar-colaborativo)
- [Guía Detallada de Estándares de Desarrollo](#guía-detallada-de-estándares-de-desarrollo)
  - [Configuración de TypeScript (tsconfig.json)](#configuración-de-typescript-tsconfigjson)
  - [Configuración de ESLint (eslint.config.js)](#configuración-de-eslint-eslintconfigjs)


## 1. Nombres de Variables y Funciones

- **Variables y funciones:** Usar camelCase (ej: `isMenuOpen`, `handleLogout`).
- **Componentes:** Usar PascalCase (ej: `SummaryTable`, `ChatHeader`).
- **Interfaces y tipos:** Prefijo I (ej: `IChat`, `IMessage`, `IAgentDatedDTO`).
- **Constantes:** Usar PascalCase para objetos y UPPER_SNAKE_CASE para valores inmutables globales.
- **Funciones de eventos:** Prefijo handle (ej: `handleSave`, `handleClick`).
- **Callbacks en props:** Prefijo on (ej: `onClose`, `onSubmit`).

**Ejemplo:**

```typescript
// Variables y funciones
let isMenuOpen = false;
function handleLogout(): void { /* ... */ }

// Componente
const SummaryTable: React.FC = () => { /* ... */ }

// Interface y tipo
interface IChat { id: string; }
type Status = 'active' | 'inactive';

// Constante global
const API_URL = "https://api.example.com";
```

## 2. Arquitectura Domain-Centric Modular

Este proyecto implementa una **Arquitectura Domain-Centric Modular** que combina principios de **Hexagonal Architecture**, **Domain-Driven Design (DDD)** y **Feature-Based Organization** para crear un sistema escalable, mantenible y comprensible.

### 🏗️ Principios Arquitectónicos Fundamentales

#### **Separación de Responsabilidades por Capas**

```plaintext
┌─────────────────────────────────────────────────────────────┐
│                        PRESENTATION                         │
│                     (React Components)                      │
├─────────────────────────────────────────────────────────────┤
│                        APPLICATION                          │
│                   (Features & Use Cases)                    │
├─────────────────────────────────────────────────────────────┤
│                         DOMAIN                             │
│                    (Business Logic)                        │
├─────────────────────────────────────────────────────────────┤
│                      INFRASTRUCTURE                        │
│                   (External Services)                      │
└─────────────────────────────────────────────────────────────┘
```

#### **Flujo de Dependencias**

```plaintext
External APIs ←→ Infrastructure ←→ Domain ←→ Application ←→ Presentation
```

### 📁 Estructura superficial de Directorios

```plaintext
src/
├── core/                           # 🎯 NÚCLEO DEL SISTEMA
│   ├── components/                 # Componentes base reutilizables
│   │   ├── GenericModal/           # Sistema de modales centralizado
│   │   ├── GenericTable/           # Sistema de tablas avanzadas
│   │   └── ui/                     # Componentes de interfaz primitivos
│   ├── layouts/                    # Layouts base del sistema
│   └── styles/                     # Sistema de estilos centralizado
│       ├── context/                # ThemeContext y providers
│       ├── globals/                # Estilos globales y temas
│       └── types/                  # Tipos específicos de estilos
├── domains/                        # 🏢 ENTIDADES DE NEGOCIO
│   ├── agents/                     # Dominio de agentes
│   ├── chats/                      # Dominio de conversaciones
│   ├── dashboard/                  # Dominio de panel de control
│   └── knowledge/                  # Dominio de conocimiento
├── features/                       # ⚙️ FUNCIONALIDADES TRANSVERSALES
│   ├── api/                        # Comunicación con APIs
│   ├── auth/                       # Autenticación y autorización
│   └── routes/                     # Configuración de rutas
└── shared/                         # 🔧 INFRAESTRUCTURA Y UTILIDADES
    ├── assets/                     # Recursos compartidos
    ├── constants/                  # Constantes globales
    ├── context/                    # Contextos globales
    ├── lib/                        # Utilidades y helpers
    ├── services/                   # Servicios compartidos
    ├── types/                      # Tipos compartidos de infraestructura
    └── ui/                         # Configuraciones de UI
```

### 🎯 Responsabilidades por Capa

#### **`core/` - Núcleo del Sistema**

- **Propósito**: Componentes y funcionalidades fundamentales reutilizables
- **Responsabilidades**:
  - Componentes UI base (GenericModal, GenericTable, botones, inputs)
  - Sistema de estilos centralizado (PresettedStyles)
  - Hooks fundamentales (useLocalStorage, useDebounce)
  - Tipos base del sistema
- **Regla**: Solo puede importar de `shared/` y bibliotecas externas
- **Ejemplos**: `@/core/components/ui/Button`, `@/core/styles/presets/`

#### **`domains/` - Entidades de Negocio**

- **Propósito**: Lógica específica de cada entidad de negocio
- **Responsabilidades**:
  - Componentes específicos del dominio
  - Lógica de negocio pura
  - Tipos y modelos del dominio
  - Servicios especializados
- **Regla**: Puede importar de `core/` y `shared/`, NO de otros dominios
- **Ejemplos**: `@/domains/agents/services/AgentService`, `@/domains/chats/components/ChatList`

#### **`features/` - Funcionalidades Transversales**

- **Propósito**: Características que cruzan múltiples dominios
- **Responsabilidades**:
  - Autenticación y autorización
  - Comunicación con APIs
  - Configuraciones globales
- **Regla**: Puede importar de `core/`, `shared/` y `domains/`
- **Ejemplos**: `@/features/auth/services/AuthService`, `@/features/api/clients/`

#### **`shared/` - Infraestructura**

- **Propósito**: Utilidades y servicios de infraestructura
- **Responsabilidades**:
  - Servicios de almacenamiento
  - Utilidades de validación
  - Constantes globales
  - Helpers de infraestructura
- **Regla**: Solo puede importar de bibliotecas externas
- **Ejemplos**: `@/shared/utils/formatters`, `@/shared/services/storage`

### 🔄 Patrones de Importación

#### **Aliases de Importación Configurados**

```typescript
// Sistema de aliases para navegación semántica
import { Button } from '@/core/components/ui/Button'        // Core UI
import { AgentCard } from '@/domains/agents/components/'    // Dominio específico
import { useAuth } from '@/features/auth/hooks/'            // Feature transversal
import { formatDate } from '@/shared/utils/formatters'      // Utilidad compartida
import { primaryColors } from '@/styles/tokens/colors'      // Design tokens
import { tablePresets } from '@/presets/tables'             // Configuraciones
```

#### **Reglas de Dependencias**

```typescript
// ✅ PERMITIDO
core/components/Button.tsx
import { cn } from '@/shared/utils/classNames'

domains/agents/AgentCard.tsx
import { Button } from '@/core/components/ui/Button'
import { formatDate } from '@/shared/utils/formatters'

features/auth/AuthService.ts
import { ApiClient } from '@/shared/services/ApiClient'
import { Agent } from '@/domains/agents/types/Agent'

// ❌ NO PERMITIDO
core/components/Button.tsx
import { Agent } from '@/domains/agents/types/Agent'  // Core no puede depender de dominios

domains/agents/AgentCard.tsx
import { Chat } from '@/domains/chats/types/Chat'     // Dominios no pueden depender entre sí

shared/utils/formatters.ts
import { Button } from '@/core/components/ui/Button'   // Shared no puede depender de core
```

### 🚀 Guía para Desarrolladores

#### **Al Crear Nuevos Componentes**

1. **¿Es reutilizable en múltiples dominios?** → `core/components/`
2. **¿Es específico de una entidad de negocio?** → `domains/{entity}/components/`
3. **¿Es parte de una funcionalidad transversal?** → `features/{feature}/components/`

#### **Al Crear Nuevos Servicios**

1. **¿Maneja lógica de negocio específica?** → `domains/{entity}/services/`
2. **¿Es infraestructura/utilidad?** → `shared/services/`
3. **¿Es una feature transversal?** → `features/{feature}/services/`

#### **Al Crear Nuevos Tipos**

1. **¿Son tipos base del sistema?** → `core/types/`
2. **¿Son específicos de un dominio?** → `domains/{entity}/types/`
3. **¿Son para infraestructura?** → `shared/types/`

#### **Matriz de Decisión Rápida**

```plaintext
┌─────────────────┬─────────┬─────────┬─────────┬─────────┐
│                 │  CORE   │ DOMAINS │FEATURES │ SHARED  │
├─────────────────┼─────────┼─────────┼─────────┼─────────┤
│ UI Components   │    ✅    │    ✅    │    ✅    │    ❌    │
│ Business Logic  │    ❌    │    ✅    │    ✅    │    ❌    │
│ API Services    │    ❌    │    ✅    │    ✅    │    ❌    │
│ Utils/Helpers   │    ✅    │    ❌    │    ❌    │    ✅    │
│ Types/Interfaces│    ✅    │    ✅    │    ✅    │    ✅    │
│ Contexts        │    ✅    │    ✅    │    ✅    │    ✅    │
└─────────────────┴─────────┴─────────┴─────────┴─────────┘
```

Esta arquitectura garantiza:

- **🧩 Modularidad**: Cada parte tiene una responsabilidad clara
- **📈 Escalabilidad**: Fácil agregar nuevos dominios y features
- **🔄 Mantenibilidad**: Cambios aislados con bajo acoplamiento
- **👥 Colaboración**: Estructura predecible para todo el equipo
- **🎯 Testabilidad**: Dependencias claras facilitan el testing

## 3. Formato de Comentarios

- **JSDoc:** Usar comentarios de bloque JSDoc para describir componentes, props, funciones y servicios.
- **Inline:** Usar comentarios inline solo para aclarar lógica compleja o secciones importantes.
- **Descripción de props:** Documentar cada prop relevante en los componentes.

**Ejemplo:**

```typescript
/**
 * Componente de tabla de aliados.
 * @param items - Lista de elementos a mostrar.
 */
const SummaryTable: React.FC<{ items: ISummary[] }> = ({ items }) => { ... }

// Comentario inline para lógica específica
const total = subtotal * (1 + taxRate); // Calcula el total con impuestos
```

## 4. Uso de Dependencias

- **Librerías de UI:** Usar Radix UI, Tailwind CSS, class-variance-authority para estilos y accesibilidad.
- **Gráficos:** Usar Recharts para visualización de datos.
- **Notificaciones:** Usar react-toastify para feedback visual.
- **Ruteo:** Usar react-router-dom para navegación.
- **HTTP:** Usar axios para peticiones a APIs.
- **Animaciones:** Usar Framer Motion para animaciones.

**Ejemplo:**

```typescript
import { Button } from '@/components/ui/Button';
import { getAllChats } from '@/services/ChatsService';
```

## 5. Estilo de Componentes

- **Componentes funcionales:** Usar React.FC y tipado explícito de props.
- **Hooks:** Usar hooks para manejo de estado, efectos y lógica de UI.
- **Separación de lógica:** Mantener lógica de negocio en servicios y lógica de presentación en componentes.
- **Props:** Tipar y documentar todas las props.
- **Reutilización:** Crear componentes desacoplados y reutilizables.
- **Estilos:** Usar clases utilitarias de Tailwind CSS y variantes por props.
- **Adaptabilidad:** Asegurar que los componentes sean responsive y accesibles.

**Ejemplo:**

```typescript
interface ICustomSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const CustomSwitch: React.FC<ICustomSwitchProps> = ({ checked, onChange }) => (
  <button
    className={`switch ${checked ? 'on' : 'off'}`}
    onClick={() => onChange(!checked)}
  >
    {checked ? 'ON' : 'OFF'}
  </button>
);
```

## 6. Flujo de Trabajo

- **Carga de datos:** Usar useEffect para cargar datos y manejar estados de loading y error.
- **Estados locales:** Usar useState para filtros, búsqueda y paginación.
- **Persistencia temporal:** Usar localStorage solo para datos temporales (ej: chat seleccionado).
- **Validaciones:** Validar datos y props antes de operar sobre ellos.
- **Feedback visual:** Proveer loaders y mensajes de error claros.

**Ejemplo:**

```typescript
const [loading, setLoading] = useState(true);
useEffect(() => {
  fetchData().then(() => setLoading(false));
}, []);
```

## 7. Otros Lineamientos

- **No repetir lógica:** Reutilizar funciones y componentes donde sea posible.
- **Escalabilidad:** Mantener la estructura de archivos y carpetas preparada para crecer.
- **Convenciones de TODO/FIXME:** Usar comentarios para marcar mejoras o problemas pendientes.
- **Documentación:** Mantener actualizada la documentación de componentes y servicios.

---

# 📚 Documentación Especializada del Proyecto

Para garantizar un desarrollo colaborativo eficiente y maximizar el aprovechamiento de los estándares definidos, este proyecto cuenta con documentación especializada que complementa las guías generales de estilo. Cada documento ha sido diseñado para abordar aspectos específicos del ecosistema de desarrollo y proporcionar las herramientas necesarias para trabajar de manera consistente y productiva en equipo.

## 🎨 [PresettedStyles - Sistema de Estilos Prediseñados](./docs/PresettedStyles.md)

### ¿Por qué es fundamental?

El sistema **PresettedStyles** es la columna vertebral del diseño visual del proyecto. Este sistema avanzado de gestión de estilos CSS elimina la inconsistencia visual y acelera significativamente el desarrollo de interfaces.

### Importancia para el equipo

- **🎯 Consistencia Automática**: Garantiza que todos los componentes mantengan una apariencia uniforme sin esfuerzo manual
- **⚡ Desarrollo Acelerado**: Configuraciones predefinidas que reducen el tiempo de desarrollo en un 60-80%
- **🔧 Type Safety Total**: Autocompletado completo con TypeScript que previene errores de estilo
- **🌙 Soporte de Temas**: Sistema integrado para dark/light mode sin configuración adicional
- **👥 Colaboración Fluida**: Todos los desarrolladores utilizan las mismas configuraciones de estilo

### Cuándo utilizarlo

- **Siempre** al crear nuevos componentes UI
- Al implementar formularios, tablas, botones, cards, o cualquier elemento visual
- Cuando necesites mantener consistencia entre diferentes vistas y módulos
- Para acelerar el proceso de desarrollo sin sacrificar calidad visual

---

## 🔧 [GenericModal - Sistema de Modales Reutilizables](./docs/GenericModal/index.md)

### ¿Por qué es esencial?

El **GenericModal** es un sistema completo y flexible para gestionar todas las ventanas modales del proyecto. Elimina la duplicación de código y garantiza una experiencia de usuario consistente en todas las interacciones modales.

### Importancia para el equipo

- **🔄 Reutilización Máxima**: Un solo componente para todas las necesidades de modales
- **🎨 Consistencia Visual**: Todas las modales comparten el mismo diseño y comportamiento
- **⚙️ Configurabilidad Total**: Adaptable para confirmaciones, formularios, galerías, y casos personalizados
- **♿ Accesibilidad Integrada**: Manejo automático de foco, ESC key, y estándares ARIA
- **📱 Responsive por Diseño**: Funciona perfectamente en todos los dispositivos

### Cuándo utilizarlo

- Para **cualquier** ventana emergente o overlay en la aplicación
- Confirmaciones de acciones (eliminar, guardar, cancelar)
- Formularios de creación/edición en overlay
- Galerías de imágenes o contenido multimedia
- Mensajes informativos o de alerta que requieran atención del usuario

---

## 📊 [GenericTable - Sistema de Tablas Avanzadas](./docs/GenericTable/index.md)

### ¿Por qué es indispensable?

El **GenericTable** es un componente robusto que maneja toda la complejidad de mostrar datos tabulares con funcionalidades avanzadas. Elimina la necesidad de reimplementar paginación, ordenamiento, filtros y estados de carga en cada tabla.

### Importancia para el equipo

- **📈 Funcionalidad Completa**: Paginación, ordenamiento, filtros, y búsqueda integrados
- **⚡ Performance Optimizada**: Renderizado eficiente para grandes volúmenes de datos
- **🎨 Integración con PresettedStyles**: Diseño automáticamente consistente
- **🔧 Extensibilidad**: Fácil personalización para casos específicos de negocio
- **📱 Responsive Adaptativo**: Columnas que se adaptan automáticamente al dispositivo

### Cuándo utilizarlo

- Para **toda** visualización de datos tabulares en el proyecto
- Listados de usuarios, pedidos, productos, reportes, etc.
- Dashboards con datos estructurados
- Cualquier interfaz que requiera mostrar múltiples registros con capacidades de interacción

---

## 🔄 [GenericStepper - Sistema de Flujos de Trabajo Multi-Paso](./docs/GenericStepper/index.md)

### ¿Por qué es revolucionario?

El **GenericStepper** es un sistema integral que transforma la complejidad de los flujos de trabajo multi-paso en configuraciones simples y declarativas. Elimina completamente la necesidad de reimplementar navegación, validación y estados de carga en cada workflow.

### Importancia para el equipo

- **🎯 Navegación Inteligente**: Sistema automático de validación y navegación entre pasos
- **⚡ Desarrollo Ultra-Rápido**: Reduce en 80% el código necesario para workflows complejos
- **🔧 Control Granular**: 7+ variantes de navegación predefinidas con control dinámico
- **🔄 Auto-Reset Inteligente**: Gestión automática de estados para UX perfecta
- **📱 Sandwich Mode**: Layout adaptativo perfecto para modales y vistas de altura completa
- **🛡️ Type Safety Total**: Integración nativa con React Hook Form y TypeScript

### Cuándo utilizarlo

- Para **cualquier** flujo de trabajo que requiera múltiples pasos
- Formularios de registro, onboarding, configuración de productos
- Procesos de aprobación, workflows de validación de datos
- Wizards de configuración y flujos de difusión masiva
- Cualquier proceso que necesite navegación controlada y validación por etapas

---

## 🚀 Maximizando el Aprovechamiento del Estándar

### Para Desarrolladores Nuevos en el Equipo

1. **Comienza con PresettedStyles**: Familiarízate con el sistema de estilos antes de crear cualquier componente
2. **Estudia GenericModal**: Entiende cómo implementar modales antes de crear ventanas emergentes personalizadas
3. **Domina GenericTable**: Aprende a configurar tablas antes de mostrar datos tabulares
4. **Maestría en GenericStepper**: Comprende los flujos multi-paso antes de crear workflows complejos
5. **Practica la Composición**: Combina estos sistemas para crear interfaces complejas de manera eficiente

### Para el Equipo en General

- **📖 Consulta Regular**: Estos documentos son referencias vivas que se actualizan constantemente
- **🔄 Feedback Continuo**: Contribuye con mejoras y casos de uso no contemplados
- **🎯 Consistencia Absoluta**: No reinventes soluciones que ya están documentadas y probadas
- **⚡ Velocidad de Desarrollo**: Utiliza estos sistemas para acelerar significativamente tu productividad

### Beneficios del Estándar Colaborativo

- **🤝 Onboarding Rápido**: Nuevos desarrolladores pueden ser productivos en días, no semanas
- **🔧 Mantenimiento Simplificado**: Un solo lugar para actualizar comportamientos globales
- **🎨 Calidad Visual Garantizada**: Imposible crear interfaces inconsistentes
- **📈 Escalabilidad del Equipo**: El código es predecible y fácil de entender para cualquier miembro

> **💡 Recordatorio**: Estos sistemas no son opcionales, son la base sobre la cual se construye todo el proyecto. Su uso consistente es lo que diferencia un proyecto profesional de uno amateur.

---

# Guía Detallada de Estándares de Desarrollo

Esta guía profundiza en las configuraciones clave de TypeScript y ESLint utilizadas en este proyecto. Seguir estas directrices es fundamental para mantener un código consistente, legible, robusto y fácil de mantener.

## Configuración de TypeScript (tsconfig.json)

El archivo [`tsconfig.json`](tsconfig.json ) instruye al compilador de TypeScript. Las siguientes opciones son cruciales para nuestro estándar:

1. **Modo Estricto (`strict: true`)**: Activa un conjunto de verificaciones de tipos que ayudan a prevenir errores comunes en tiempo de ejecución. Incluye:
    - `noImplicitAny: true`: Prohíbe el uso implícito del tipo `any`. Si TypeScript no puede inferir un tipo, debes declararlo explícitamente. Esto mejora la seguridad de tipos.

        ```typescript
        // Incorrecto: 'data' tiene tipo 'any' implícito
        function process(data) {
          console.log(data);
        }

        // Correcto: Tipo explícito para 'data'
        function process(data: unknown): void { // O un tipo más específico
          console.log(data);
        }
        ```

    - `strictNullChecks: true`: Trata `null` y `undefined` como tipos distintos y no asignables a otros tipos por defecto. Obliga a manejar explícitamente la posibilidad de valores nulos o indefinidos.

        ```typescript
        // Incorrecto: 'name' podría ser null/undefined si el elemento no existe
        // const element = document.getElementById("myEl");
        // const name: string = element.getAttribute("data-name");

        // Correcto: Manejar la posibilidad de null
        const element = document.getElementById("myEl");
        const name: string | null = element ? element.getAttribute("data-name") : null;

        if (name !== null) {
          console.log(name.toUpperCase());
        }
        ```

    - `strictFunctionTypes: true`: Aplica reglas más estrictas para la asignación de funciones, especialmente en lo que respecta a la varianza de los parámetros (contravarianza).
    - `strictPropertyInitialization: true`: Exige que todas las propiedades de una clase sean inicializadas en el constructor o mediante un inicializador de propiedad, a menos que se marquen como opcionales (`?`) o definidas (`!`).

        ```typescript
        class User {
          // Incorrecto: 'username' no está inicializada
          // username: string;

          // Correcto: Inicializada en el constructor
          username: string;
          email!: string; // Correcto: Asignación definida (si estás seguro que se asignará externamente)
          profileUrl?: string; // Correcto: Propiedad opcional

          constructor(username: string) {
            this.username = username;
          }

          setEmail(email: string) {
              this.email = email;
          }
        }
        ```

    - `noImplicitThis: true`: Genera un error si se usa `this` en una función donde su contexto no está claramente definido (y TypeScript lo inferiría como `any`).

        ```typescript
        // Incorrecto: El tipo de 'this' es implícitamente 'any'
        // function handleClick() {
        //   console.log(this.tagName);
        // }

        // Correcto: Especificar el tipo de 'this'
        function handleClick(this: HTMLButtonElement): void {
          console.log(this.tagName); // 'this' es de tipo HTMLButtonElement
        }
        const button = document.querySelector('button');
        button?.addEventListener('click', handleClick);
        ```

    - `alwaysStrict: true`: Asegura que el código se analice en modo estricto de JavaScript y añade `"use strict";` al principio de los archivos JavaScript generados.

2. **Detección de Errores y Código No Utilizado**:
    - `noUnusedLocals: true`: Señala variables, clases, funciones, etc., declaradas localmente pero nunca leídas. Ayuda a mantener el código limpio.

        ```typescript
        function calculateTotal(price: number, quantity: number): number {
          const taxRate = 0.1; // Incorrecto: 'taxRate' no se usa
          const subtotal = price * quantity;
          return subtotal; // Debería ser: subtotal * (1 + taxRate);
        }
        ```

    - `noUnusedParameters: true`: Advierte sobre parámetros de función que no se utilizan en el cuerpo de la función. (ESLint también gestiona esto, ver más abajo).

        ```typescript
        // Incorrecto: 'options' no se usa
        function fetchData(url: string, options: object): Promise<any> {
          return fetch(url);
        }

        // Correcto (si 'options' es intencionalmente ignorado):
        // Usar '_' como prefijo (ver regla ESLint)
        function fetchData(url: string, _options: object): Promise<any> {
          return fetch(url);
        }
        ```

    - `noImplicitReturns: true`: Verifica que todas las rutas de código en una función devuelvan un valor si la función declara un tipo de retorno (o si infiere uno distinto de `void` o `any`).

        ```typescript
        // Incorrecto: No hay 'return' si 'value' es 0
        function getSign(value: number): string {
          if (value > 0) {
            return "positive";
          } else if (value < 0) {
            return "negative";
          }
          // Falta return para value === 0
        }

        // Correcto:
        function getSign(value: number): string {
          if (value > 0) {
            return "positive";
          } else if (value < 0) {
            return "negative";
          }
          return "zero";
        }
        ```

    - `noFallthroughCasesInSwitch: true`: Previene caídas accidentales entre cláusulas `case` en una declaración `switch`. Requiere `break;`, `return;`, `throw;` o `continue;` al final de cada `case` no vacío.

        ```typescript
        // Incorrecto: Si status es 'pending', ejecutará también el código de 'processing'
        // switch (status) {
        //   case 'pending':
        //     console.log("Order is pending.");
        //   case 'processing':
        //     console.log("Order is processing.");
        //     break;
        //   default:
        //     console.log("Order status:", status);
        // }

        // Correcto:
        switch (status) {
          case 'pending':
            console.log("Order is pending.");
            break; // Añadido break
          case 'processing':
            console.log("Order is processing.");
            break;
          default:
            console.log("Order status:", status);
        }
        ```

    - `noUncheckedIndexedAccess: true`: Añade `undefined` al tipo resultante cuando se accede a propiedades de un objeto mediante un índice (ej. `array[index]`, `record[key]`). Obliga a verificar si el valor existe.

        ```typescript
        const scores: { [key: string]: number } = { 'Alice': 90, 'Bob': 85 };
        const aliceScore = scores['Alice']; // Tipo: number | undefined
        const charlieScore = scores['Charlie']; // Tipo: number | undefined

        // Incorrecto sin la opción (o sin verificar): Podría fallar si 'Charlie' no existe
        // console.log(charlieScore.toFixed(1));

        // Correcto: Verificar si existe
        if (charlieScore !== undefined) {
          console.log(charlieScore.toFixed(1));
        } else {
          console.log("Charlie's score not found.");
        }

        const list = [10, 20];
        const first = list[0]; // Tipo: number | undefined
        const third = list[2]; // Tipo: number | undefined
        ```

3. **Consistencia y Módulos**:
    - `forceConsistentCasingInFileNames: true`: Impide importar módulos si el casing del nombre del archivo en la importación no coincide exactamente con el del sistema de archivos. Crucial para evitar problemas entre diferentes sistemas operativos (Windows vs Linux/macOS).

        ```typescript
        // Asumiendo que el archivo es 'src/utils/MyFunctions.ts'

        // Correcto:
        import { helper } from '@/utils/MyFunctions';

        // Incorrecto: (causará error en sistemas case-sensitive si se commitea así)
        // import { helper } from '@/utils/myfunctions';
        // import { helper } from '@/utils/Myfunctions';
        ```

    - `paths: { "@/*": ["./src/*"] }`: Define alias para las rutas de importación. `@/` se resuelve a la carpeta [`src`](src ). Mejora la legibilidad y facilita la refactorización al evitar rutas relativas largas (`../../...`).

        ```typescript
        // Preferido: Uso de alias
        import { Button } from '@/components/ui/Button';
        import { apiService } from '@/services/api';

        // Evitar: Rutas relativas complejas
        // import { Button } from '../../components/ui/Button';
        // import { apiService } from '../services/api';
        ```

## Configuración de ESLint (eslint.config.js)

ESLint analiza el código para encontrar problemas de estilo, posibles errores y malas prácticas que el compilador de TypeScript podría no detectar.

1. **Variables No Utilizadas (`@typescript-eslint/no-unused-vars`)**:
    - **Propósito**: Detecta variables, funciones, parámetros, etc., que se declaran pero nunca se usan. Ayuda a eliminar código muerto.
    - **Configuración**: Permite ignorar variables/parámetros si su nombre comienza con `_` ( `argsIgnorePattern: "^_"` , `varsIgnorePattern: "^_"`). Útil para indicar intencionalidad (ej. en callbacks donde se recibe un parámetro pero no se necesita).
    - **Ejemplo**:

        ```typescript
        // Incorrecto: 'isActive' se declara pero no se usa
        function UserProfile({ user }: { user: IUser }) {
          const isActive = user.status === 'active'; // Error: 'isActive' is assigned a value but never used.
          return <div>{user.name}</div>;
        }

        // Correcto (si 'event' no se necesita):
        function handleClick(_event: React.MouseEvent): void {
          console.log("Button clicked");
        }

        // Correcto (desestructuración, solo se usa 'b'):
        const [_a, b] = [1, 2];
        console.log(b);
        ```

2. **Tipos de Retorno Explícitos (`@typescript-eslint/explicit-function-return-type`)**:
    - **Propósito**: Requiere que las funciones (especialmente las exportadas y las expresiones de función) tengan un tipo de retorno explícito (`: void`, `: string`, `: Promise<number>`, etc.). Mejora la claridad y previene errores si la función devuelve accidentalmente un tipo inesperado.
    - **Configuración**: Nivel `warn` (advertencia, no error). Permite expresiones (`allowExpressions: true`) y funciones tipadas (`allowTypedFunctionExpressions: true`) sin tipo de retorno explícito si TypeScript puede inferirlo claramente.
    - **Ejemplo**:

        ```typescript
        // Incorrecto (Genera Warning): Falta el tipo de retorno explícito
        // export const getUserData = async (userId: string) => {
        //   const response = await fetch(`/api/users/${userId}`);
        //   return response.json(); // ¿Qué devuelve .json()? ¿Promise<any>? ¿Promise<IUser>?
        // }

        // Correcto: Tipo de retorno explícito
        interface IUser { id: string; name: string; }
        export const getUserData = async (userId: string): Promise<IUser> => {
          const response = await fetch(`/api/users/${userId}`);
          if (!response.ok) throw new Error("Failed to fetch user");
          const data: IUser = await response.json();
          return data;
        }

        // Correcto (Permitido por allowExpressions): Tipo inferido claramente
        const double = (x: number) => x * 2; // Infiere : number
        ```

3. **Definición de Tipos (`@typescript-eslint/consistent-type-definitions`)**:
    - **Propósito**: Estandariza la forma de definir tipos de objeto. Prefiere `interface` sobre `type` para estructuras de objeto, ya que las interfaces pueden ser extendidas y fusionadas más fácilmente. `type` se prefiere para uniones, intersecciones, tipos primitivos, tuplas, etc.
    - **Ejemplo**:

        ```typescript
        // Correcto: Usar interface para definir la forma de un objeto
        interface IProduct {
          id: string;
          name: string;
          price: number;
        }

        // Correcto: Usar type para un alias de tipo primitivo o unión
        type ProductId = string;
        type Status = 'pending' | 'completed' | 'failed';

        // Incorrecto: Usar type para una estructura de objeto simple
        // type ProductType = {
        //   id: string;
        //   name: string;
        //   price: number;
        // };
        ```

4. **Prohibir `any` Explícito (`@typescript-eslint/no-explicit-any`)**:
    - **Propósito**: Desaconseja el uso del tipo `any`, ya que desactiva las comprobaciones de tipo de TypeScript para esa variable. Es preferible usar `unknown` si el tipo es realmente desconocido o un tipo más específico.
    - **Configuración**: Nivel `warn` (advertencia).
    - **Ejemplo**:

        ```typescript
        // Incorrecto (Genera Warning): Uso de 'any'
        // function logData(data: any): void {
        //   console.log(data.message); // No hay seguridad de tipo aquí
        // }

        // Correcto: Usar 'unknown' y verificar el tipo
        function logData(data: unknown): void {
          if (typeof data === 'object' && data !== null && 'message' in data) {
            console.log((data as { message: unknown }).message);
          } else {
            console.log("Data does not have a message property.");
          }
        }
        ```

5. **Comentarios `@ts-ignore` (`@typescript-eslint/ban-ts-comment`)**:
    - **Propósito**: Desaconseja el uso de comentarios como `// @ts-ignore` que suprimen errores de TypeScript. Si es necesario usarlo, se debe proporcionar una descripción.
    - **Configuración**: Permite `ts-ignore` si se añade una descripción (`"ts-ignore": "allow-with-description"`).
    - **Ejemplo**:

        ```typescript
        // Incorrecto (Genera Warning): Sin descripción
        // @ts-ignore
        // const value = legacyLibrary.someUnsafeMethod();

        // Correcto: Con descripción explicando por qué es necesario
        // @ts-ignore: legacyLibrary no tiene tipos y este método es necesario temporalmente
        const value = legacyLibrary.someUnsafeMethod();
        ```

6. **Convenciones de Nomenclatura (`@typescript-eslint/naming-convention`)**:
    - **Propósito**: Impone un estilo consistente para nombrar variables, funciones, clases, interfaces, etc. Mejora la legibilidad y predictibilidad del código.
    - **Configuración**:
        - `interface`: PascalCase con prefijo `I` (ej. `IUserProfile`).
        - `typeAlias`: PascalCase (ej. `UserId`, `ConfigOptions`).
        - `enum`: PascalCase (ej. `OrderStatus`, `LogLevel`).
        - `variable`: `camelCase` (variables locales/miembros), `UPPER_CASE` (constantes globales/exportadas), `PascalCase` (clases/constructores). Permite `_` inicial (ej. `_internalValue`).
    - **Ejemplo**:

        ```typescript
        // Correcto
        interface IUserAccount { email: string; }
        type AccountId = number;
        enum LoadingState { Pending, Success, Error }
        const API_ENDPOINT = "/api/v1";
        let isLoading = false;
        class DataService {}
        const _privateCounter = 0;

        // Incorrecto
        // interface userAccount { email: string; } // Debe ser IUserAccount
        // type account_id = number; // Debe ser AccountId
        // enum loading_state { pending, success, error } // Debe ser LoadingState
        // const apiEndpoint = "/api/v1"; // Debe ser API_ENDPOINT si es constante global
        // let IsLoading = false; // Debe ser isLoading
        ```

7. **Reglas de React**:
    - `react/jsx-key`: **Requiere** el atributo `key` único cuando se renderiza una lista de elementos a partir de un array. React usa esta `key` para identificar qué elementos han cambiado, se han añadido o eliminado, optimizando las actualizaciones del DOM.

        ```jsx
        // Incorrecto: Falta la key
        // {items.map(item => (
        //   <div>{item.name}</div>
        // ))}

        // Correcto: Usar un ID único como key
        {items.map((item) => (
          <div key={item.id}> {/* item.id debe ser único y estable */}
            {item.name}
          </div>
        ))}

        // Correcto (si no hay ID estable, usar índice como último recurso, pero puede tener problemas si la lista cambia de orden)
        {items.map((item, index) => (
          <div key={index}>
            {item.name}
          </div>
        ))}
        ```

    - `react-hooks/rules-of-hooks`: **Impone** las reglas fundamentales de los Hooks:
        1. Solo llamar Hooks en el nivel superior de un componente funcional o de otro Hook custom.
        2. No llamar Hooks dentro de bucles, condiciones o funciones anidadas.

        ```jsx
        // Incorrecto: Hook llamado dentro de una condición
        // function MyComponent({ shouldFetch }) {
        //   if (shouldFetch) {
        //     useEffect(() => { /* ... */ }, []); // Error: React Hook "useEffect" is called conditionally.
        //   }
        //   return null;
        // }

        // Correcto: Llamar el Hook incondicionalmente, mover la lógica dentro
        function MyComponent({ shouldFetch }) {
          useEffect(() => {
            if (shouldFetch) {
              // ... fetch data ...
            }
          }, [shouldFetch]);
          return null;
        }
        ```

    - `react-hooks/exhaustive-deps`: **Advierte** si el array de dependencias de `useEffect`, `useCallback`, `useMemo`, etc., no incluye todos los valores externos (props, state, funciones) que utiliza el Hook y que pueden cambiar con el tiempo. Omitir dependencias puede causar que el Hook capture valores obsoletos.

        ```jsx
        function Counter({ step }) {
          const [count, setCount] = useState(0);

          // Incorrecto (Genera Warning): Falta 'step' en las dependencias
          // const increment = useCallback(() => {
          //   setCount(c => c + step);
          // }, [setCount]); // Debería ser [step, setCount] o solo [step]

          // Correcto: Incluir 'step'
          const increment = useCallback(() => {
            setCount(c => c + step);
          }, [step]); // Ahora el callback se recrea si 'step' cambia

          useEffect(() => {
            console.log(`Current step is: ${step}`);
            // Si se usara 'count' aquí, también debería estar en las dependencias
          }, [step]); // Correcto

          return <button onClick={increment}>Count: {count}</button>;
        }
        ```

8. **Imports Restringidos y Consistencia de Namespace (`no-restricted-imports`)**:
    - **Propósito**: Prohíbe ciertos patrones de importación para mantener consistencia y claridad en el código. Específicamente, evita importar [`JSX`](node_modules/@types/react/index.d.ts ) directamente desde React para forzar el uso del namespace completo.
    - **Configuración**: Prohíbe `import { JSX } from "react"` y sugiere usar [`React.JSX.Element`](node_modules/@types/react/index.d.ts ) en su lugar.
    - **Beneficios**: Mejora la claridad del namespace, consistencia en el código, y mejor tree-shaking.
    - **Ejemplo**:

        ```typescript
        // ❌ PROHIBIDO (Genera Error): Import directo de JSX
        import { JSX } from "react"
        function Component(): JSX.Element {
          return <div>...</div>
        }

        // ✅ RECOMENDADO: Usar namespace completo de React
        import React from "react"
        function Component(): React.JSX.Element {
          return <div>...</div>
        }

        // ✅ TAMBIÉN VÁLIDO: TypeScript infiere automáticamente
        import React from "react"
        function Component() { // Infiere React.JSX.Element
          return <div>...</div>
        }
        ```

        **Mensaje de error**: `'JSX' import from 'react' is restricted. Don't import JSX directly from 'react'. Use 'React.JSX.Element' instead for better namespace clarity and consistency.`

9. **Estilo y Calidad General**:
    - `no-console`: **Advierte** sobre el uso de métodos de `console` (excepto `log`, `warn`, `error` según la configuración). Ayuda a evitar que se dejen logs de depuración en el código de producción.

        ```javascript
        // Permitido (según config):
        console.log("Component mounted");
        console.warn("Deprecated method used");
        console.error("Failed to load data", error);

        // Genera Warning (si no está permitido):
        // console.debug("Debugging value:", value);
        // console.info("User logged in");
        ```

    - `eqeqeq`: **Requiere** el uso de operadores de igualdad estricta (`===` y `!==`) en lugar de los operadores de igualdad abstracta (`==` y `!=`). La igualdad estricta no realiza coerción de tipos, lo que previene errores sutiles.

        ```javascript
        // Incorrecto: Usa == (puede dar resultados inesperados por coerción)
        // if (value == 0) { /* ... */ } // true para 0, '0', false, null, undefined (dependiendo del otro lado)

        // Correcto: Usa === (compara valor y tipo)
        if (value === 0) { /* ... */ } // true solo si value es el número 0
        if (value !== null) { /* ... */ } // Verifica que no sea explícitamente null
        ```

    - `no-duplicate-imports`: **Previene** importar el mismo módulo múltiples veces en el mismo archivo. Consolida las importaciones para mayor claridad.

        ```javascript
        // Incorrecto:
        // import { useState } from 'react';
        // import { useEffect } from 'react';

        // Correcto:
        import { useState, useEffect } from 'react';
        ```

    - `prefer-const`: **Sugiere** usar `const` en lugar de `let` para variables que nunca son reasignadas después de su declaración inicial. Indica claramente la intención de que el valor no cambiará.

        ```javascript
        // Incorrecto: 'API_URL' no se reasigna, debería ser const
        // let API_URL = "https://example.com/api";

        // Correcto:
        const API_URL = "https://example.com/api";
        let counter = 0; // Correcto usar let porque se reasigna
        counter++;
        ```

    - `object-shorthand`: **Prefiere** la sintaxis abreviada para propiedades y métodos en literales de objeto cuando la clave y la variable tienen el mismo nombre.

        ```javascript
        const name = "Alice";
        const age = 30;

        // Incorrecto:
        // const user = {
        //   name: name,
        //   age: age,
        //   greet: function() { console.log("Hello"); }
        // };

        // Correcto:
        const user = {
          name, // Propiedad abreviada
          age,  // Propiedad abreviada
          greet() { // Método abreviado
            console.log("Hello");
          }
        };
        ```

---

**¿Cómo usar esta guía?**
Al comparar un componente/módulo con estos lineamientos, verifica que:

- En la primera linea exista el comentario "Modulo/Componente ajustado", en caso de hacerlo se omitira dicho archivo continuando la tarea con otro arhivo.
- Los nombres, estructura, comentarios y demas sigan las convenciones.
- El componente sea funcional, tipado, documentado y reutilizable.
- La lógica de negocio esté separada de la presentación.
- Se usen las dependencias y utilidades recomendadas.
- Al comparar el archivo, independientemente de si se refactoriza o no, marcar el arhivo en la primera linea con el comentario "Modulo/Componente ajustado"

Si algún aspecto no cumple, es necesario refactorizar para alinearse con estos estándares sin modificar la logica actúal, el punto es corregir acoplando los modulos/componentes al estandar de desarrollo propuesto en el Readme.

Adherirse a estas configuraciones detalladas de TypeScript y ESLint es esencial para construir una base de código robusta, mantenible y colaborativa.
