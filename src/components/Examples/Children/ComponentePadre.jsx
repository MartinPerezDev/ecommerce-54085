import ComponenteHijo from "./ComponenteHijo"

const ComponentePadre = () => {
  return (
    <div>
      <ComponenteHijo>
        <h2>Este es un titulo enviado desde el componente padre</h2>
        <p>Este es un párrafo enviado desde el componente padre</p>
      </ComponenteHijo>
    </div>
  )
}
export default ComponentePadre