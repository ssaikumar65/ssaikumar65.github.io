import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// document.addEventListener('visibilitychange',
//   function () {
//       if (document.visibilityState !== "visible") {
//           document.title = "Come Back!";
//       }
//       else {
//           document.title = "Sai Kumar's Portfolio";
//       }
//   });

// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
