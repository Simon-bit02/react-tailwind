import 'tailwindcss/dist/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.jsx';
import AppConversation from './AppConversation';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppConversation />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
