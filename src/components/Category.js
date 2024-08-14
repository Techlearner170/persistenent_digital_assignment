import React from 'react';

function Category() {
  const categories = [
    'Beauty & Personal Care',
    'Electronics',
    'Books & Stationery',
    'Home & Kitchen',
    'Fitness & Sports'
  ];

  return (
    <div className="py-8">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-4 rounded shadow text-center transition duration-300 ease-in-out hover:shadow-lg">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
