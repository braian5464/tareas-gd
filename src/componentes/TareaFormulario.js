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
  

      const [inputhp, setInputhp] = useState("");
      const [inputhpb, setInputhpb] = useState("0");
      const [inputatc, setInputatc] = useState("");
      
      const [inputdf, setInputdf] = useState("");
      const [inputrd, setInputrd] = useState("0");



    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input3p, setInput3p] = useState(0);
    const [Inputjugador, setInputjugador] = useState(1);


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

    const manejarJugador = e => {
      setInputjugador(e.target.value)
      console.log(setInputjugador)
    };

    const manejarHp = e => {
      setInputhp(e.target.value)
      setInputhpb(e.target.value)
    };
    
    const manejarAtc = e => {
      setInputatc(e.target.value)
      
    };

    const manejarDf = e => {
      setInputdf(e.target.value)
      
    };
    const manejarRd = e => {
     
      
      
      setInputrd(e.target.value)
     
    };


   



    const manejarEnvio = e => {

      if (inputrd < 0 ) {
      if (inputrd ===! 0 ) {
        setInputrd("0")
      }; 
      };

        e.preventDefault();
        
          
     
          const tareaNueva = {
          
           id: uuidv4(),
           texto: input,
           texto2: input2,
           texto3: input3,
           texto3p: input3p,
           textohp: inputhp,
           textohpb: inputhpb,
           textoatc: inputatc,
           textodf: inputdf,
           textord: inputrd,
           textojugador: Inputjugador,
          
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
    <div>
    <input 
     className="tarea-inputPreciohp"

     type="number"
     placeholder="Vida"
     name="texto"
     onChange={manejarHp}
     value={inputhp}
     
     />
     <input 
     className="tarea-inputPreciohp"

     type="number"
     placeholder="Ataque"
     name="texto"
     onChange={manejarAtc}
     value={inputatc}
     
     />
    </div>
    <div>
    <input 
     className="tarea-inputPreciohp"

     type="number"
     placeholder="Defensa"
     name="texto"
     onChange={manejarDf}
     value={inputdf}
     
     />
     <input 
     className="tarea-inputPreciohp"
     required
     type="number"
     
     min="0"
     max="100"
     maxLength="3"
     placeholder="RD"
     name="texto"
     onChange={manejarRd}
     value={inputrd}
     
     />
    </div>
       <select onChange={manejarJugador} className="tarea-boton">
        <option value="1" >jugador 1</option>
        <option value="2" >jugador 2</option>
       </select>

      <button  className="tarea-boton">
        Agregar Tarea
     </button>

     
    </form>
          
    

    </div>
    </>
  )
}
