import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Routes.jsx'

// create tanstack query client
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* TODO: create auth provider */}
        <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
