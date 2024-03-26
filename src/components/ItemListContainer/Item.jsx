const Item = ({ product }) => {
  return (
    <div key={product.id} className="card">
      <div className="image-box-card">
        <img className="image-card" src={product.image} alt={product.name} />
      </div>
      <div className="info-card">
        <h2 className="title-card">{product.name}</h2>
        <p className="description-card">{product.description}</p>
      </div>
    </div>
  );
};
export default Item;
