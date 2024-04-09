const ComponenteHijo = ({ titulo, children }) => {

  return (
    <div style={{border: "1px solid black"}}>
      <h1>{titulo}</h1>
      { children }
    </div>
  )
}
export default ComponenteHijo