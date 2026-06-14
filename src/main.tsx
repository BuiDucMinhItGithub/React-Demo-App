import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LangProvider from './app/LangProvider.tsx'
import { AppProviders } from './app/ReduxProviders.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <AppProviders>
        <App />
      </AppProviders>
    </LangProvider>
  </StrictMode>,
)
