import { Helmet } from "react-helmet";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Logitech | Home</title>
        <meta
          name="description"
          content="home page of X electronic commerce for the sale of electronic products"
        />
      </Helmet>
      <ItemListContainer greetings="Bienvenidos a Logitech" />
    </div>
  );
};
export default HomePage;
