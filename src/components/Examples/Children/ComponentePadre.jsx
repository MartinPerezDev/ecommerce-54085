import ComponenteHijo from "./ComponenteHijo"

const ComponentePadre = () => {
  return (
    <div>
      <ComponenteHijo titulo = "Mi caja 1">
        <h2>Este es un titulo enviado desde el componente padre</h2>
        <p>Este es un párrafo enviado desde el componente padre</p>
      </ComponenteHijo>

      <ComponenteHijo titulo = "Mi caja 2">
        <h2>Este es un titulo enviado desde el componente padre</h2>
        <button>Clickeame</button>
      </ComponenteHijo>
    </div>
  )
}
export default ComponentePadre