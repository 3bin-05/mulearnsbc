# Project Setup & Conventional Folder Structure

This document outlines the default path for components and styles, why the structure is setup this way, and how to migrate this codebase to support a full **shadcn project structure**, **Tailwind CSS**, and **TypeScript**.

---

## 1. Default Paths in this Project

- **Components Path**: `src/components/`
- **UI Components Path**: `src/components/ui/` (mapped via alias `@/components/ui/`)
- **Styles Path**: `src/index.css` (primary stylesheet) and `src/App.css` (app-specific stylings)

### Why the `/components/ui` Folder is Important
The `/components/ui` directory is the standard convention established by **shadcn/ui**. It serves several critical purposes:
1. **Separation of Concerns**: Base/primitive UI components (buttons, dialogs, inputs, avatars) go into `/components/ui/`. Domain-specific compositions or page sections (e.g., `Hero.jsx`, `Events.jsx`) live in `/components/sections/` or `/components/layout/`.
2. **Automated Tooling Compatibility**: The shadcn CLI automatically dumps all newly added UI elements directly into `/components/ui/` by default. Keeping this folder ensures compatibility with CLI commands (e.g., `npx shadcn@latest add button`).
3. **Clean Import Structure**: It matches the typical import pattern of `@/components/ui/name` where `@` refers to the `src` folder.

---

## 2. Setting Up shadcn CLI

If you want to initialize shadcn/ui in this codebase, run the following:

```bash
npx shadcn@latest init
```

During initialization, select these configuration options:
- **Style**: Default
- **Base Color**: Neutral or Slate
- **CSS Variables**: Yes
- **Tailwind Config location**: `tailwind.config.js`
- **Global CSS location**: `src/index.css`
- **Import alias for components**: `@/components`
- **Import alias for utils**: `@/lib/utils`

---

## 3. Installing & Setting Up Tailwind CSS

If Tailwind CSS is not already set up (it is currently installed and configured in this codebase), follow these steps to install and set it up:

1. Install Tailwind and its peer dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```
2. Initialize Tailwind configuration:
   ```bash
   npx tailwindcss init -p
   ```
3. Update `tailwind.config.js` content path to point to your files:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```
4. Include Tailwind directives at the top of your global CSS (`src/index.css`):
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## 4. Upgrading to TypeScript

To migrate this project from JavaScript/React to TypeScript, follow these steps:

1. Install TypeScript, types, and developer tooling:
   ```bash
   npm install -D typescript @types/react @types/react-dom @types/node vite-tsconfig-paths
   ```
2. Create/Initialize `tsconfig.json` at the root directory:
   ```bash
   npx tsc --init
   ```
   Or create it with these standard options:
   ```json
   {
     "compilerOptions": {
       "target": "ES2022",
       "useDefineForClassFields": true,
       "lib": ["DOM", "DOM.Iterable", "ES2022"],
       "module": "ESNext",
       "skipLibCheck": true,

       /* Bundler mode */
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx",

       /* Linting */
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "noFallthroughCasesInSwitch": true,

       /* Path Alias mapping */
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     },
     "include": ["src"]
   }
   ```
3. Update `vite.config.js` to support resolving TypeScript paths if not already resolved:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tsconfigPaths from 'vite-tsconfig-paths'

   export default defineConfig({
     plugins: [react(), tsconfigPaths()],
     // ... rest of config
   })
   ```
4. Rename your file extensions:
   - Rename entry files: `src/main.jsx` -> `src/main.tsx`
   - Rename component files: `.jsx` -> `.tsx`
   - Rename plain JS files: `.js` -> `.ts`
5. In `index.html`, make sure the script tag points to the new `.tsx` entry:
   ```html
   <script type="module" src="/src/main.tsx"></script>
   ```
