const productsArray = [
  { id: '1', name: 'Camera', image: './camera.jpg', price: 200.0 },
  { id: '2', name: 'Celular', image: './celular.jpg', price: 1000.0 },
  { id: '3', name: 'Relogio', image: './relogio.jpg', price: 150.0 },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log(`Os dados doproduto não exitem para esse id: ${id}`);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
