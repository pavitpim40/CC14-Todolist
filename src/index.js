import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'; // Global CSS
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
