import { Provider } from 'react-redux';
import "bulma/css/bulma.css";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from "./store";

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
  
);
