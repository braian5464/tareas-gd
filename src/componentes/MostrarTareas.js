import React from 'react'


export default function MostrarTareas({ idTarea, tareas }) {

  console.log(tareas)

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
        padding: "50px",
        gap: "40px",
      }}>
      <h2>Tarea Detalle</h2>
      <p>{textoTarea[0] ? textoTarea[0].texto : ""}</p>

    </div>
  )
}
