const Count = ({ contador, sumar, borrar }) => {
  return (
    <div>
      <p> Contador: {contador} </p>
      <button onClick={sumar}> + </button>
      <button onClick={borrar}>reset</button>
    </div>
  )
}
export default Count