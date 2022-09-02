import React from 'react'
import "../estilos/MostrarTarea.css"




export default function Carta({id , editarTarea , idTarea , tareas }) {


    
    const textoTarea = tareas.filter(tarea => tarea.id === idTarea)






  return (



    <>

     

     <div className="almacen-carta" style={{
        width: "500px",
        minHeight: "500px",
        maxHeight: "800px",
        backgroundColor: "gray",
        borderRadius: "20px",
        borderColor: "blue",
        
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        padding: "5px",
        gap: "1px",
      }}>

    
     <p className='texteprecio'>$ {textoTarea[0] ?  textoTarea[0].texto3p : ""}</p>
     <p className='texteprecioHP'>HP:{textoTarea[0] ?  textoTarea[0].textohpb : ""}/{textoTarea[0] ?  textoTarea[0].textohp : ""}</p>
     <p className='texteprecioHP'>ATK:{textoTarea[0] ?  textoTarea[0].textoatc : ""}</p>
     <p className='texteprecioHP'>DEF:{textoTarea[0] ?  textoTarea[0].textodf : ""}</p>
     <p className='texteprecioHP'>RD:{textoTarea[0] ?  textoTarea[0].textord : ""}%</p>

     </div>
    
     

    </>
  )
}
