import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/index.css'
import App from 'src/App'
import Providers from 'src/providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
