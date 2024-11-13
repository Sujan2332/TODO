import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo from '../src/components/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>,
)
