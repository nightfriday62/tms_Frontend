# TMS Frontend

A Transportation Management System (TMS) web application built with React, TypeScript, and Vite.

## Features

- **Dashboard** — overview cards showing counts for Shipments, Shipping Units, Trucks, and Drivers
- **Shipments** — manage and track shipments
- **Routes** — plan and view delivery routes
- **Settings** — application configuration

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| Routing | React Router v7 |
| Linting | ESLint |

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (included with Node.js)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The app will be available at **http://localhost:5173** (Vite's default port). The development server supports Hot Module Replacement (HMR) so changes are reflected instantly in the browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Type-check and produce an optimised production build in `dist/` |
| `npm run preview` | Serve the production build locally for final verification |
| `npm run lint` | Run ESLint across the entire codebase |

## Project Structure

```
src/
├── components/       # Shared UI components (Header, Footer)
├── pages/            # Page-level components
│   ├── Home.tsx
│   ├── Dashboard.tsx
│   ├── Shipments.tsx
│   ├── Routes.tsx
│   └── Settings.tsx
├── App.tsx           # Root component with routing
└── main.tsx          # Application entry point
```
