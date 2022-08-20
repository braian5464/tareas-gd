import React from 'react';
import "../estilos/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

import ListaDeTareas from "../componentes/ListaDeTareas"


export default function Tarea({id , texto , completada , completarTarea , eliminarTarea  }) {

  

  return (
    <div className={completada ? "tarea-contenedor-completada" : "tarea-contenedor" }>
      
        <div className="tarea-texto"
        onClick={() => completarTarea(id)}>
         {texto}
        </div>
        <div 
        className="tarea-icono"
        onClick={() => eliminarTarea (id)}>
        <AiOutlineCloseCircle className='tarea-icono'/>
        </div>
        
    </div>
  )
}
