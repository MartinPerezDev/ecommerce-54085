import { Helmet } from "react-helmet";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const ProductDetailPage = () => {
  return (
    <div>
      <Helmet>
        <title>Logitech | Detail Product</title>
      </Helmet>
      <ItemDetailContainer />
    </div>
  );
};
export default ProductDetailPage;
