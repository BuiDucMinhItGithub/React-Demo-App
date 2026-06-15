# Demo1

Frontend application — React + TypeScript starter used in this workspace.

**Tech stack**

- React (TSX)
- TypeScript
- Vite (development server and build) — project follows Vite layout (`index.html`, `src/main.tsx`)
- Vitest (unit tests)
- ESLint (linting)
- Redux (store + providers)
- Axios (HTTP client)
- CSS modules for component styles

**Prerequisites**

- Node.js 18+ (or latest LTS)
- npm, Yarn, or pnpm

**Quick setup**

1. Install dependencies

```bash
cd Demo1
npm install
```
2. Start the dev server (development)

```bash
# from the project folder
cd Demo1
# install once if you haven't
npm install

# start vite dev server
npm run dev
```

Open http://localhost:5173 in your browser (Vite default). If a different port is used, the terminal output will show the exact URL.

3. Build for production

```bash
cd Demo1
npm run build
```

4. Preview production build

```bash
cd Demo1
npm run preview
```

5. Run tests

```bash
cd Demo1
npm run test
```

6. Lint

```bash
cd Demo1
npm run lint
```

If any of the `npm run` scripts above are missing in your `package.json`, add these sample scripts to the `Demo1/package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest",
  "lint": "eslint src --ext .ts,.tsx"
}
```

**Notes & pointers**

- App entry: `src/main.tsx`
- Routes and guards: `src/route` and `src/components/route`
- Redux store: `src/app/store.ts` and `src/app/ReduxProviders.tsx`
- API client: `src/services/axiosClient.ts`
- Environment details: see `docs/ENVIRONMENTS.md`

