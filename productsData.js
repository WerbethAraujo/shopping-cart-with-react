const productsArray = [
  { id: '1', name: 'Camera', price: 200.0 },
  { id: '2', name: 'Celular', price: 1000.0 },
  { id: '3', name: 'Relogio', price: 150.0 },
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
