const ItemDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}
export default ItemDetail