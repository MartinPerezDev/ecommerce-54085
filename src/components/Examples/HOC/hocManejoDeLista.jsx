import { useState } from "react"

//este es nuestro HOC
const hocManejoDeLista = (Componente) => {

  const HocManejoDeLista = () =>{
    const [tareas, setTareas] = useState([])

    const añadirTarea = (nuevaTarea) =>{
      setTareas([ ...tareas, nuevaTarea ])
    }

    const eliminarTarea = (idTarea) =>{
      const tareasFiltradas = tareas.filter((tarea)=> tarea.id !== idTarea )
      setTareas(tareasFiltradas)
    }

    //Filtrar tareas

    //Modificar tareas

    //Subir las tareas a una db

    return <Componente tareas={tareas} añadirTarea={añadirTarea} eliminarTarea={eliminarTarea} />
  }

  return HocManejoDeLista
}

//exportamos nuestro HOC
export default hocManejoDeLista