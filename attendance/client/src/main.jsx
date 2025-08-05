// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {BrowserRouter as Router} from 'react-router-dom'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Router>
//       <App />
//     </Router>
   
//   </StrictMode>,
// )
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { BrowserRouter as Router } from 'react-router-dom';

// // Ensure the element with id 'root' exists in your HTML file
// const rootElement = document.getElementById('root');

// if (!rootElement) {
//   throw new Error("Could not find element with id 'root'");
// }

// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </StrictMode>
// );
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Ensure the element with id 'root' exists in your HTML file
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find element with id 'root'");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);