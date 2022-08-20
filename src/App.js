import React from "react"


import ListaDeTareas from "./componentes/ListaDeTareas"
import './App.css';




function App(props) {  


  return (
    <div className="aplicacion-tareas">
      <div>

           </div>

                <div className="tareas-lista-principal">
                <h1>Mis Tareas</h1>
        
                <ListaDeTareas
                 />
      

                </div>

            <div>
            
        

      </div>
      
    </div>
    
  );
}

export default App;
