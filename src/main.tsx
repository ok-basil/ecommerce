import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ShopContextProvider from '@/context/ShopContext.tsx';

createRoot(document.getElementById('root')!).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
    
)
