import React from 'react';
import "../estilos/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiFillBook } from "react-icons/ai";

import ListaDeTareas from "../componentes/ListaDeTareas"


export default function Tarea({id , texto , completada , completarTarea , eliminarTarea ,bloquearTarea , bloqueada , restarContador }) {

  
  
 




  return (
    <div className={completada ? "tarea-contenedor-completada" : "tarea-contenedor" }>
                
        <div 
        className="tarea-icono"
        onClick={() => bloquearTarea (id)}>
        <AiFillBook className='tarea-icono'/>
        </div>
        <div className="tarea-texto"
        onClick={() => completarTarea(id)}>
         {texto}
        </div>
        <div onSubmit={() =>restarContador (id)} className={bloqueada ? "tareabloqueada" : "tareaDesbloqueada" }
        
        onClick={() => {bloqueada ? completarTarea(id)  : eliminarTarea (id)}}>
        <AiOutlineCloseCircle className="tarea-icono" />
        </div>
              
    </div>
  )
}
