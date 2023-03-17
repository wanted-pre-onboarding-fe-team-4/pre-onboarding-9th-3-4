import ReactDOM from 'react-dom/client';
import App from './App';
import { LocationFilterProvider } from './contexts/locationFilter';
import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <LocationFilterProvider>
    <App />
  </LocationFilterProvider>
);
