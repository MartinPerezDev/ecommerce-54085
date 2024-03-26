import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  //agregar al carrito
  const addToCart = (count) => {
    console.log(count);
  };

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Hola Mundo!" />
      <ItemCount addToCart={addToCart} />
    </div>
  );
}

export default App;
