import { BrowserRouter } from 'react-router-dom'
import { RouteApp } from './router'

import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client = {queryClient}>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
