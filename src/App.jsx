import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer'
import CountController from './components/Examples/CountController'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo = "Hola Mundo!" nombre = "Juan" />
      <CountController />
    </div>
  )
}

export default App
