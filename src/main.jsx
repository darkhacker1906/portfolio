import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider,Popover, Whisper } from 'rsuite';
createRoot(document.getElementById('root')).render(
  <CustomProvider theme="light">
    <App />
    </CustomProvider>
)
