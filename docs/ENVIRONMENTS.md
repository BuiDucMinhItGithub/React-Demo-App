# Environment modes

This project uses Vite environment modes. There are three standard environments configured:

- SIT: `.env.sit` (integration/system integration testing)
- UAT: `.env.uat` (user acceptance testing)
- PROD: `.env.production` (production)

Each env file exposes Vite variables that begin with `VITE_` and are available in the app as `import.meta.env.VITE_*`.

Common variables defined in `.env.*`:

- `VITE_APP_ENV` — string label for the environment (sit/uat/production)
- `VITE_API_URL` — backend API base URL (used by `axiosClient`)
- `VITE_ENABLE_SENTRY` — true/false to enable production monitoring

Local example file: `.env.example` (copy/rename to `.env.sit`/`.env.uat`/`.env.production` and edit values).

Available scripts
-----------------

Start dev server for a specific mode (uses the env file matching the mode):
```
npm run dev:sit   # development with .env.sit
npm run dev:uat   # development with .env.uat
```

Build for a specific environment (compiles TypeScript then runs Vite build):
```
npm run build:sit
npm run build:uat
npm run build:prod
```

Preview a built production bundle:
```
npm run build:prod
npm run preview
```

Accessing env vars in code
-------------------------

Use `import.meta.env.VITE_API_URL` to read values in client code (already wired in `src/services/axiosClient.ts`).
