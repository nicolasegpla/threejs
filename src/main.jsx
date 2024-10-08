import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirstScene } from './Scenes/FirstScene.jsx'
import { Light } from './Scenes/Light.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Light />
  </StrictMode>,
)
