import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/index.css'
import App from 'src/App'
import Providers from 'src/providers'
import { Toaster } from 'src/components/ui/sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
      <Toaster />
    </Providers>
  </StrictMode>,
)
