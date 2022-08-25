import React from 'react';
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import "../estilos/ListaDeTareas.css"
import { useState } from "react"

import MostrarTareas from './MostrarTareas';





export default function ListaDeTareas(props) {


  
  const [total,setTotal] = useState(0)

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log(tarea)
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      
      setTareas(tareasActualizadas);
      setTotal( total +  Number(tarea.texto3p)  )

     
    }

  }

  

  const eliminarTarea = id => {

    
     

    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    const numeroResta =  tareas.filter(tarea => tarea.id === id)
     setTotal(total - numeroResta[0].texto3p)
    
    setTareas(tareasActualizadas);
    
  }

  

  const bloquearTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
    if (tarea.id === id) {
      tarea.bloqueada = !tarea.bloqueada;
    }
    return tarea;

  });
  setTareas(tareasActualizadas);
  
}






  const [idTarea, setIdTarea] = useState()
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;

    });
    setTareas(tareasActualizadas);
    setIdTarea(id);
  }




  return (

    <div style={{ display: "flex", width: "100%", height: "100%" }}>

         
<div className="tarea-inputPrecio" >{total}</div>
      <div>
      
        <TareaFormulario agregarTarea={agregarTarea}  />
     
        <div className="tareas-lista-contenedor">
          
          {
            tareas.map((tarea) =>
              <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                texto2={tarea.texto2}
                texto3={tarea.texto3}
                texto3p={tarea.texto3p}

                completada={tarea.completada}
                bloqueada={tarea.bloqueada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
                bloquearTarea={bloquearTarea}
                
                

              />
            )
          }
        </div>
      </div>
      <MostrarTareas idTarea={idTarea} tareas={tareas} />


    </div>
  )
}
