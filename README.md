## ALX Listing App

## Project Description

The ALX Listing App is an Airbnb clone Project focused on  creating a modern, responsive property listing page.
This milestone establishes the foundational structure using Next.js, Typescript, and TailwindCSS.

## Project Goals

- Build a scalable and maintainable codebase
- create reuseable UI components
- Implement Typescript for type safety
- Design responsive layouts with TailwindCSS

## Project Structure
```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx          # Reusable card component for property listings
│       └── Button.tsx        # Reusable button component
├── interfaces/
│   └── index.ts              # TypeScript interfaces and types
├── constants/
│   └── index.ts              # Application constants and configuration
├── public/
│   └── assets/               # Static assets (images, SVGs)
├── pages/
│   └── index.tsx             # Home page
├── styles/
│   └── globals.css           # Global styles with Tailwind directives
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone 
cd alx-listing-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm start` - Runs the production build
- `npm run lint` - Runs ESLint to check code quality

## Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type safety and better developer experience
- **TailwindCSS** - Utility-first CSS framework
- **ESLint** - Code linting and quality checks

