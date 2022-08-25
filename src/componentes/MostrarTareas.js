import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import "../estilos/MostrarTarea.css"
import ReactPlayer from "react-player"



//<ReactPlayer autoPlay={true} width="500px" height="400px" 
   //   url={textoTarea[0] ? textoTarea[0].texto3 : ""} />


export default function MostrarTareas({ id , editarTarea , idTarea , tareas }) {

  

  const textoTarea = tareas.filter(tarea => tarea.id === idTarea)


  
  


  return (
    <div 
      style={{
        width: "500px",
        minHeight: "500px",
        maxHeight: "800px",
        backgroundColor: "gray",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        padding: "5px",
        gap: "1px",
      }}>

      <AiFillEdit className='tarea-icono'/> 
      <h2 className='texte0'>Tarea Detalle</h2>
      
      <p className='texteprecio'>$ {textoTarea[0] ?  textoTarea[0].texto3p : ""}</p>

      <p className='textep1'>{textoTarea[0] ? textoTarea[0].texto : ""}</p>
              
       
      <p className='textep2'>{textoTarea[0] ? textoTarea[0].texto2 : ""}</p>
      
      
      <img style={{
        minwidth: "300px",
        width: "420px",
        minHeight: "300px",
        maxHeight: "320px",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",
        
        alignItems: "center",
        padding: "5px",
        gap: "40px",}}
      src={textoTarea[0] ? textoTarea[0].texto3 : "" }/>

      
       <p>{textoTarea[0] ? textoTarea[0].id : ""}</p>

       
      
      
    </div>
  )
}
