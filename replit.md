# CODICORE PRIVATE LIMITED - Corporate Website

## Overview

This is a modern, professional corporate website for CODICORE PRIVATE LIMITED, a legally registered technology company in India (CIN: U58200UP2025PTC230810). The website showcases the company's flagship product SkoolHub 2.0, an automated school management system, along with retail and restaurant solutions. Built as a comprehensive multi-section single-page application with smooth scrolling, animations, and a premium dark theme with glass morphism effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing between sections
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for dark theme with glass morphism and gradient overlays
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Animations**: Custom CSS animations with AOS (Animate On Scroll) library and Lenis.js for ultra-smooth scrolling
- **Typography**: Inter font family with multiple weight variants for professional appearance

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript development
- **Database ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production
- **API Design**: RESTful API structure with centralized route registration
- **Session Management**: Connect-PG-Simple for PostgreSQL session storage

### Design System
- **Component Library**: Shadcn/ui with "new-york" style variant
- **Color Palette**: Professional tech-focused colors including deep blue (#0F172A), electric green (#10B981), aqua (#06B6D4), purple (#8B5CF6), black, and white
- **Theme**: Dark theme as default with glass morphism effects, gradient backgrounds, and animated tech visuals
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints for all device sizes
- **Performance**: Lazy loading for images/videos, optimized animations for smooth performance

### Content Structure
- **Homepage**: Full-screen hero with animated logo and tech background visuals
- **About Section**: Company story, legal registration details, team member cards with animations
- **Products Section**: Detailed SkoolHub 2.0 showcase with interactive elements and industry solutions
- **Technology Section**: Animated infographics showing React.js, Django, AI integration, cloud hosting
- **Testimonials**: Client success stories with professional imagery
- **Careers Section**: Company culture and job opportunities
- **Contact Section**: Professional contact form with validation and social media links

### Data Management
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **Schema**: User management system with username/password authentication
- **Migrations**: Drizzle Kit for database schema migrations and version control
- **Validation**: Zod schemas for runtime type validation on forms and API endpoints

### Development Environment
- **Package Manager**: npm with lockfile for dependency management
- **TypeScript Configuration**: Strict mode enabled with path mapping for clean imports
- **Development Server**: Vite dev server with hot module replacement and Replit integration
- **Build Process**: Separate client and server builds with ESBuild for server bundling

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations and schema management
- **@tanstack/react-query**: Server state management and data fetching with caching
- **wouter**: Lightweight React router for client-side navigation

### UI and Animation Libraries
- **@radix-ui/react-***: Complete set of accessible UI primitives for complex components
- **@studio-freight/lenis**: Professional smooth scrolling library for premium feel
- **aos**: Animate On Scroll library for entrance effects and scroll-triggered animations
- **class-variance-authority**: Utility for creating type-safe component variants
- **tailwindcss**: Utility-first CSS framework with custom configuration

### Development and Build Tools
- **vite**: Fast build tool with hot module replacement for development
- **esbuild**: Fast JavaScript bundler for production server builds
- **tsx**: TypeScript execution environment for development server
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific development enhancements

### Form and Data Handling
- **@hookform/resolvers**: Form validation resolvers for React Hook Form integration
- **react-hook-form**: Performant forms library with validation
- **zod**: TypeScript-first schema validation library
- **date-fns**: Modern JavaScript date utility library

### Icons and Assets
- **lucide-react**: Beautiful and consistent icon library
- **react-icons**: Popular icon libraries including brand icons for social media
- **Custom logo**: Company logo stored in attached assets folder