import React from 'react';
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import "../estilos/ListaDeTareas.css"
import { useState } from "react"

import MostrarTareas from './MostrarTareas';



export default function ListaDeTareas(props) {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }

  }
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
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
      <div>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
          {
            tareas.map((tarea) =>
              <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                texto2={tarea.texto2}
                texto3={tarea.texto3}
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
