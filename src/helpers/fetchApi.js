export const getProducts = () => {
  return fetch("http://localhost:8080/api/productos")
    .then((res) => res.json())
    .catch((error) => console.log(error))
}

export const getProductById = (id) => {
  return fetch(`http://localhost:8080/api/productos/${id}`)
    .then((res) => res.json())
    .catch((error) => console.log(error))
}

export const addProduct = (newProduct) => {
  return fetch("http://localhost:8080/api/productos", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  })
    .then((res) => res.json())
    .catch((error) => console.log(error))
}

export const setProduct = (idProduct, productMod) => {
  return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(productMod)
  })
    .then((res) => res.json())
    .catch((error) => console.log(error))
}

export const deleteProduct = (idProducto) => {
  return fetch(`http://localhost:8080/api/productos/${idProducto}`, {
    method: "DELETE"
  })
    .then((res) => res.json())
    .catch((error) => console.log(error))
}