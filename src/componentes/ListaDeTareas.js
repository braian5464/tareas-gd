import React from 'react';
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import "../estilos/ListaDeTareas.css";
import { useState } from "react";


import { evaluate, HelpDependencies } from "mathjs";

import MostrarTareas from './MostrarTareas';


import Carta from "../componentes/Carta";
import "../estilos/Puente.css";
import Carta2 from "../componentes/Carta2";




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

  
  const [atk, setatk] = useState("")
  const [atk2, setatk2] = useState("0")
  const [atkb, setatkb] = useState("")
  const [atk2b, setatk2b] = useState("0")

  const [df, setdf] = useState("")
  const [dfb, setdfb] = useState("")


  const combateTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {

      if (tarea.textojugador === 1 ) {
      setatk("0"); 
      setdf("0"); 
      }

      if (tarea.textojugador === 2 ) {
        setatkb("0"); 
        setdfb("0"); 
      }

      if (tarea.textojugador === 1 ) {

        setatk( Number(tarea.textoatc)); 
        setdf( Number(tarea.textodf)); 

      }

  
      if (tarea.textojugador === 2 ) {
  
        setatkb( Number(tarea.textoatc)); 
        setdfb( Number(tarea.textodf)); 
  
      }

      console.log(tarea)

     if (tarea.id === id) {
      if (tarea.completada  === true ) {

      setatk( Number(tarea.textoatc)); 
       setdf( Number(tarea.textodf)); 

       console.log("combate")

       if (atk ===! atk ) {
        console.log(atk)
        console.log(atk2)
     setatk( evaluate ( Number(tarea.textoatc) ));
      setatk2( evaluate ( atk + "-" + dfb ));

  if (atk2 === 0 ) {
    console.log(atk2)
  
    setatk2( evaluate ( atk + "-" + dfb ));
  
  }
  if (atk2 > 0 ) {
    console.log(atk2)
  
    setatk2( evaluate ( atk + "-" + dfb ));
  
  }

  if (atk2 < 0 ) {
    console.log(atk2)
  
    setatk2( evaluate ("0"));
  
  }


      }
    }
  }
  
  
  if (atk2 === 0 ) {
    console.log(atk2)
  
    setatk2( evaluate ( atk + "-" + dfb ));
  
  }
  if (atk2 > 0 ) {
    console.log(atk2)
  
    setatk2( evaluate ( atk + "-" + dfb ));
  
  }

  if (atk2 < 0 ) {
    console.log(atk2)
  
    setatk2( evaluate ("0"));
  
  }

  
  console.log("ob")
  console.log(atk2b)
  console.log("ob")

  

      console.log(atk)
    if (tarea.id === id) {
      if (tarea.completada === true) {

        if (tarea.id === id ) {
          
      (tarea.textohp) =  ( evaluate ( Number(tarea.textohp) + "-" + ( atk2b + "+" + ( atk2b + "*" + ( Number(tarea.textord)  + "/" + "100" ) )  ))  );

      console.log(tarea.textohp);

      (tarea.textohp) = (tarea.textohp).toFixed(2);

      if ( ( evaluate ( Number(tarea.textohp) + "-" +  atk2b ) ) < 0 ) {
  
        tarea.bloqueada2 = !tarea.bloqueada2;
      
          };

           }
        }
    }

    return tarea;

  });
  setTareas(tareasActualizadas);
  setatk2b( evaluate ("0"));
  
  
}


const combateTarea2 = id => {

  
  

  
  const tareasActualizadas = tareas.map(tarea => {

    console.log(tarea.textojugador)

    if (tarea.textojugador === 1 ) {
      setatk("0"); 
      setdf("0"); 
      }

    if (tarea.textojugador === 2 ) {
      setatkb("0"); 
      setdfb("0"); 
    }

    if (tarea.textojugador === 2 ) {

      setatkb( Number(tarea.textoatc)); 
      setdfb( Number(tarea.textodf)); 

    }


      if (tarea.textojugador === 1 ) {

        setatk( Number(tarea.textoatc)); 
        setdf( Number(tarea.textodf)); 

      }


      console.log(tarea.textojugador)

    if (atk2b < 0 ) {
      console.log(atk2b)
    setatk2b( evaluate ( "0" ));
    }
      

    if (tarea.id === id) { 
      if (tarea.completada  === true ) {

         setatkb( Number(tarea.textoatc)); 
       setdfb( Number(tarea.textodf)); 
    
      
    console.log(tarea)
    
    
    console.log("combate2")
    console.log(atkb)   
    console.log(atk2)   

    if (atkb ===! ( Number(tarea.textoatc) ) ) {
      console.log(atkb)

    setatkb( evaluate ( Number(tarea.textoatc) ));
    setatk( evaluate ( atkb + "-" + df ));

    if (atk2b === 0 ) {
      console.log(atk2b)
    
      setatk2b( evaluate ( atkb + "-" + df ));
    
    }

    if (atk2b > 0 ) {
      console.log(atk2b)
    
    setatk2b( evaluate ( atkb + "-" + df));
    
    }
    if (atk2b < 0 ) {
      console.log(atk2b)
    
    setatk2b( evaluate ( "0" ));
    
    }
        }
      }
    }


    if (atk2b === 0 ) {
      console.log(atk2b)
      setatk2b( evaluate ( atkb + "-" + df ));
    }
    if (atk2b > 0 ) {
      console.log(atk2b)
    setatk2b( evaluate ( atkb + "-" + df));
    }
    if (atk2b < 0 ) {
      console.log(atk2b)
    setatk2b( evaluate ( "0" ));
    }
    
  console.log("ob")
  console.log(atk2)
  console.log("ob")

    
  

  if (tarea.id === id) {
    if (tarea.completada === true) {
      if (tarea.id === id ) {
      

    (tarea.textohp) =  ( evaluate ( Number(tarea.textohp) + "-" + ( atk2 + "+" + ( atk2 + "*" + ( Number(tarea.textord)  + "/" + "100" ) )  ))  );
    
    (tarea.textohp) = (tarea.textohp).toFixed(2);


    if ( ( evaluate ( Number(tarea.textohp) + "-" +  atk2 ) ) < 0 ) {
      tarea.bloqueada2 = !tarea.bloqueada2;
        };

      }
    }
  }

  return tarea;

});



setTareas(tareasActualizadas);
setatk2( evaluate ("0"));


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





const [idTarea2, setIdTarea2] = useState()

const completarTarea2 = id => {
  const tareasActualizadas = tareas.map(tarea => {
    
   

    
    if (tarea.id === id) {
      tarea.completada = !tarea.completada;
    }
    
    return tarea;

  });
  setTareas(tareasActualizadas);
  setIdTarea2(id);
 
  
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
      
        <TareaFormulario agregarTarea={agregarTarea}   />
     
        <div className="tareas-lista-contenedor">
          
          {
            tareas.map((tarea) =>
              <Tarea
                
                key={tarea.id}
                id={tarea.id}
                textojugador={tarea.textojugador}

                texto={tarea.texto}
                texto2={tarea.texto2}
                texto3={tarea.texto3}
                texto3p={tarea.texto3p}
                textohp={tarea.textohp}
                textohpb={tarea.textohpb}

                textoatc={tarea.textoatc}
                textodf={tarea.textodf}
                textord={tarea.textord}

                completada={tarea.completada}
                bloqueada={tarea.bloqueada}
                bloqueada2={tarea.bloqueada2}

                completarTarea={completarTarea}
                completarTarea2={completarTarea2}
                eliminarTarea={eliminarTarea}
                bloquearTarea={bloquearTarea}
                

                combateTarea={combateTarea}
                combateTarea2={combateTarea2}

              />
            )
          }
        </div>
      </div>
      <MostrarTareas idTarea={idTarea} tareas={tareas} />

      

      <h1>Mis Tareas</h1>


         <div style={{ margin:"0px",
               }} className="tareas-lista-principal2a">
         <Carta  idTarea={idTarea} tareas={tareas} />
         </div>
         
         
         <div style={{ margin:"  0 100px 0 ",
               }}
               className="tareas-lista-principal2a">
         <Carta2  idTarea2={idTarea2} tareas2={tareas} idTarea={idTarea} tareas={tareas}  />
         </div>
             

    </div>
  )
}
