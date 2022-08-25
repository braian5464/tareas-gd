import React from 'react'
import "../estilos/TareaFormulario.css"
import {useState} from "react"
import {v4 as uuidv4} from "uuid"
import { evaluate } from "mathjs"


export default function TareaFormulario({agregarTarea}) {

  
 


  const [guardar , setNumClics3] = useState("0");


  const sumaContador =() => {

    setNumClics3( evaluate (input3p + "+" + guardar )); 
  
    
    };
  
    const bloqueada =(bloqueada) => {
  
      setNumClics3( evaluate (guardar + "-" + input3p )); 
    
      
      };
  

  
 




    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input3p, setInput3p] = useState(0);

    const manejarCambio = e => {
        setInput2(e.target.value)
        
    };

    const manejarCambio2 = e => {
      if (input3p === 0 ) {
        

        setInput3p("")
      }

      setInput(e.target.value)
    };

    const manejarCambioUrl = e => {
      setInput3(e.target.value)
    };

    const manejarCambioPrecio = e => {
      setInput3p(e.target.value)
      
      

    };

    const manejarEnvio = e => {
         
      

        e.preventDefault();
        
          
     
          const tareaNueva = {
          
           id: uuidv4(),
           texto: input,
           texto2: input2,
           texto3: input3,
           texto3p: input3p,
           completada: false
           
          };
        agregarTarea(tareaNueva)
        setInput("")  
        setInput3p("")
        setInput2("")  
        setInput3("")
    }

  return (
    <>
    <div >
    

   

    
    <form 
    className="tarea-formulario"
    onSubmit={manejarEnvio}>
     <input required
     className="tarea-input"
     type="text"
     placeholder="Escribe una Tarea"
     name="texto"
     onChange={manejarCambio2}
     value={input}
     />
  
    
    
    
    
     <textarea
     className="tarea-inputDetalle"
     
     type="text"
     placeholder="Escribe una Nota"
     name="texto"
     onChange={manejarCambio}
     value={input2}
     />

     <input 
     className="tarea-input"
     type="url"
     placeholder="Escribe el url de la img"
     name="texto"
     onChange={manejarCambioUrl}
     value={input3}
     />
     <input 
     className="tarea-inputPrecio"

     type="number"
     placeholder="ingrese precio"
     name="texto"
     onChange={manejarCambioPrecio}
     value={input3p}
     
     />
      
      <button  className="tarea-boton">
        Agregar Tarea
     </button>

     
    </form>
          
    
     

    </div>
    </>
  )
}
