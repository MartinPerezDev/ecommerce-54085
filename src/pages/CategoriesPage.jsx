import { Helmet } from "react-helmet";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const CategoriesPage = () => {
  return (
    <div>
      <Helmet>
        <title>Logitech | Category Product</title>
      </Helmet>
      <ItemListContainer greetings="Bienvenidos a Logitech" />
    </div>
  );
};
export default CategoriesPage;
