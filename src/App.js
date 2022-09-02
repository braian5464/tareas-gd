import React from "react"


import ListaDeTareas from "./componentes/ListaDeTareas"
import './App.css';
import MostrarTareas from "./componentes/MostrarTareas";
import Puente from "./componentes/Puente";



function App(props) {


  return (
    <div className="aplicacion-tareas">
      

      

      <div className="tareas-lista-principal">
        <h1>Menu Tareas</h1>

        <Puente
        />
        
      </div>

      
      

      



      

    </div>

  );
}

export default App;
