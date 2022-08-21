import React from 'react'
import "../estilos/TareaFormulario.css"
import {useState} from "react"
import {v4 as uuidv4} from "uuid"


export default function TareaFormulario(props) {

    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");

    const manejarCambio = e => {
        setInput2(e.target.value)
    };

    const manejarCambio2 = a => {
      setInput(a.target.value)
    };

    const manejarCambioUrl = c => {
      setInput3(c.target.value)
    };

    const manejarEnvio = e => {
        e.preventDefault();
     
          const tareaNueva = {
           id: uuidv4(),
           texto: input,
           texto2: input2,
           texto3: input3,
           completada: false
          };
        props.onSubmit(tareaNueva)  
        
    }

  return (
    <>
    <div >
    <>
    <form 
    className="tarea-formulario"
    onSubmit={manejarEnvio}>
     <input 
     className="tarea-input"
     type="text"
     placeholder="Escribe una Tarea"
     name="texto"
     onChange={manejarCambio2}
     />
  
    </form>
    </>
    
    <form 
    className="tarea-formulario"
    onSubmit={manejarEnvio}>
     <textarea
     className="tarea-inputDetalle"
     
     type="text"
     placeholder="Escribe una Nota"
     name="texto"
     onChange={manejarCambio}
     
     />

     <input 
     className="tarea-input"
     type="url"
     placeholder="Escribe el url de la img"
     name="texto"
     onChange={manejarCambioUrl}
     />
  
     <button onClick={props.AgregarTarea} className="tarea-boton">
        Agregar Tarea
     </button>

    </form>
    
    </div>
    </>
  )
}
