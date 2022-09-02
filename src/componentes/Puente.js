import React from 'react'
import ListaDeTareas from "../componentes/ListaDeTareas"


import "../estilos/Puente.css"


export default function Puente({idTarea , tareas}) {
  return (


    <>
    
    <div className="tareas-lista-principal2">
        
        
        
         <div className="tareas-lista-principal2b">

         

         <ListaDeTareas idTarea={idTarea} tareas={tareas}
        />
        
 
         </div>
         

      </div>
      
      
      
    
    </>


  )
}
