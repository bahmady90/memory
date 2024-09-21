import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MemoryContextProvider from './context/memory-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemoryContextProvider>
      <App />
    </MemoryContextProvider>
  </StrictMode>,
)
