import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Si tu veux commencer à mesurer les performances de ton application,
// passe une fonction pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoie-les à un endpoint d'analyse. Plus d'infos : https://bit.ly/CRA-vitals
