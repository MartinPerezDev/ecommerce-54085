import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Nuestros productos" />
    </div>
  );
}

export default App;
