# VER International Website

## Overview

This is a nonprofit website for Volunteer Eye Resources International (VER), an organization dedicated to restoring sight to individuals living in extreme poverty in developing nations. The site is built as a React single-page application with an Express backend, featuring multiple pages including Home, About, Volunteer, and Donate sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with custom design system following nonprofit design guidelines
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Structure**: RESTful API with `/api` prefix (routes defined in `server/routes.ts`)
- **Static Serving**: Express serves built client assets from `dist/public`

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Schema**: Basic users table with id, username, password fields
- **In-Memory Fallback**: `MemStorage` class provides in-memory storage when database is not connected
- **Migrations**: Drizzle Kit manages database migrations in `./migrations` directory

### Design System
- **Typography**: Inter/Open Sans family fonts via Google Fonts
- **Color Palette**: Medical blue primary (#1E40AF), warm amber accent (#F59E0B), neutral backgrounds
- **Layout**: Max-width 7xl container, responsive padding, Tailwind spacing primitives
- **Components**: Cards, buttons, forms follow shadcn/ui patterns with custom theming via CSS variables

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components (shadcn/ui + custom)
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface
  static.ts       # Static file serving
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database queries and schema management
- **connect-pg-simple**: PostgreSQL session storage for Express

### Frontend Libraries
- **Radix UI**: Accessible component primitives (accordion, dialog, dropdown, etc.)
- **TanStack React Query**: Data fetching and caching
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel/slider functionality
- **React Hook Form + Zod**: Form handling and validation

### Build & Development
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server-side bundling for production
- **tsx**: TypeScript execution for development
- **Tailwind CSS + PostCSS**: Styling pipeline

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling (dev only)
- `@replit/vite-plugin-dev-banner`: Development banner (dev only)