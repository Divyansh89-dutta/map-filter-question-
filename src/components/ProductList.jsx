import React from 'react';

const ProductList = () => {
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }
  ];
// ...object spreads function 
  const updatedProducts = products.map((product) => ({
    ...product,
    price: product.price * (1 + 10 / 100)
    // 1 + 10 / 100 ensure that the original price is miltiplied by the appropriate factor
    // if 10 = 10 then 1 + 10/100 = 1.1 
  }));

  return (
    <div>
      <h1>Product</h1>
      <ul>
        {updatedProducts.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
