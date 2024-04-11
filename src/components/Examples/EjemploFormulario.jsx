import { useState } from "react"

const EjemploFormulario = () => {
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")

  const handleChangeNombre = (event) =>{
    setNombre(event.target.value)
  }

  const handleChangeDireccion = (event) => {
    setDireccion(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    //subir los datos a la db
    const usuario = { nombre, direccion }
    console.log(usuario)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Nombre</p>
      <input type="text" value={nombre} onChange={handleChangeNombre} />

      <p>Direccion</p>
      <input type="text" value={direccion} onChange={handleChangeDireccion} />

      <button type="submit">Enviar Formulario</button>
    </form>
  )
}
export default EjemploFormulario