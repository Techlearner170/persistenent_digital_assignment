import React from 'react';

function Carousel() {
  const slides = [
    { id: 1, image: '/images/carousel1.jpg' },
    { id: 2, image: '/images/carousel2.jpg' },
    { id: 3, image: '/images/carousel3.jpg' }
  ];

  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Special Offers</h2>
        <div className="overflow-hidden relative">
          <div className="flex transition-transform duration-500">
            {slides.map(slide => (
              <img
                key={slide.id}
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-64 object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
