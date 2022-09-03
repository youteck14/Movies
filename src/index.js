import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Card from './Card';
import PrimerComponente from './AppEjemplo';
import Carrusel from './componentes/Carrusel';
import Cartillas from './componentes/Cartillas';
import FormRegister from './componentes/FormRegister';
import FormUsuario from './componentes/formUser';


/* primero la funcion luego donde esta */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* todo lo que yo coloque dentro se mirara pero
  todo componente debe estar en una funcion
  tiene que tener un return */
  <React.StrictMode>
    <Header />
    
    <Carrusel />
    
    <Cartillas/>
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
