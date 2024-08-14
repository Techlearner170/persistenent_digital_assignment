import React from 'react';

function FeaturedProducts() {
  const products = [
    { name: 'Product 1', price: '$99', image: '/images/product1.jpg' },
    { name: 'Product 2', price: '$149', image: '/images/product2.jpg' },
    { name: 'Product 3', price: '$199', image: '/images/product3.jpg' }
  ];

  return (
    <div className="py-8">
      <h2 className="text-xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded shadow transition duration-300 ease-in-out hover:shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
            <div className="text-center">
              <h3 className="font-bold">{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
