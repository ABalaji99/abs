/my-app
  /public
    /images          // Static images like logos, backgrounds, icons
    /fonts           // Custom fonts if any
    /videos          // Static videos (e.g., demo videos or background videos)
  /src
    /components      // Reusable UI components
      /common        // Common UI components (buttons, modals, etc.)
      /layouts       // Layout components (header, footer, etc.)
      /sections      // Sections for the landing and services pages
      /animations    // Framer Motion or other animation-related components
    /pages
      /api           // API routes (for server-side functionalities)
      /about         // About Us page
      /contact       // Contact page
      /services      // Services page
        /[service]   // Dynamic service page for each service (e.g., AI, Cybersecurity)
      /index.tsx     // Main landing page (Home)
    /styles
      /globals.css   // Global styles (Tailwind CSS, custom CSS)
      /tailwind.css  // Tailwind config
    /utils
      /helpers       // Utility functions or custom hooks
      /animations    // Functions for scroll/interaction animations
    /context
      /AppContext.tsx // Context providers for app-wide state management (if needed)
    /assets
      /logos         // Logo files and branding assets
      /illustrations // Any custom illustrations
    /hooks
      /useWindowSize.ts // Custom hook for managing window resizing
  .env.local         // Environment variables
  next.config.js     // Next.js configuration file
  tailwind.config.js // Tailwind CSS configuration
  package.json       // Project dependencies and scripts
  tsconfig.json      // TypeScript configuration
