import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter as Router} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <Router>
       <App />
    </Router>
)
