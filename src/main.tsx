import './index.css';
import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'
import Language from './Language';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Language/>
  </StrictMode>,
)
