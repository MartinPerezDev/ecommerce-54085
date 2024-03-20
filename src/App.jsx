import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer'
import Banner from './components/Examples/Banner'

function App() {

  return (
    <div>
      <NavBar />
      <Banner />

      <ItemListContainer saludo = "Hola Mundo!" nombre = "Juan" />
    </div>
  )
}

export default App
