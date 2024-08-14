import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Category from './components/Category';
import FeaturedProducts from './components/FeaturedProducts';
import NearbyStores from './components/NearbyStores';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container mx-auto px-4 py-8">
        <Category />
        <FeaturedProducts />
        <NearbyStores />
      </div>
    </div>
  );
}

export default App;
