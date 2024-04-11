import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EjemploFormulario from "./components/Examples/EjemploFormulario";

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Nuestros productos" />} />

        <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestros productos" />} />

        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

        <Route path="/example" element={ <EjemploFormulario /> } />

      </Routes>    
    </BrowserRouter>
  );
}

export default App;
