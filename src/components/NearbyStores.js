import React from 'react';

function NearbyStores() {
  const stores = [
    { name: 'Store 1', location: 'Location 1', image: '/images/store1.jpg' },
    { name: 'Store 2', location: 'Location 2', image: '/images/store2.jpg' },
    { name: 'Store 3', location: 'Location 3', image: '/images/store3.jpg' }
  ];

  return (
    <div className="py-8">
      <h2 className="text-xl font-bold mb-4">Nearby Stores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stores.map((store, index) => (
          <div key={index} className="bg-white p-4 rounded shadow transition duration-300 ease-in-out hover:shadow-lg">
            <img src={store.image} alt={store.name} className="w-full h-40 object-cover mb-4 rounded" />
            <div className="text-center">
              <h3 className="font-bold">{store.name}</h3>
              <p>{store.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NearbyStores;
