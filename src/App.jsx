import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Banner from "./components/Examples/Banner/Banner";

function App() {
  //agregar al carrito
  const addToCart = (count) => {
    console.log(count);
  };

  return (
    <div>
      <NavBar />
      <Banner />
      <ItemListContainer saludo="Nuestros productos" />
      <ItemCount addToCart={addToCart} />
    </div>
  );
}

export default App;
