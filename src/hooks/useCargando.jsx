import { useState } from "react"

const useCargando = () => {
  const [cargando, setCargando] = useState(false)

  const mostrarCargando = () => setCargando(true)

  const ocultarCargando = () => setCargando(false)

  const pantallaDeCarga = <div className="cargando"> Cargando... </div>

  return { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga }
}

export default useCargando