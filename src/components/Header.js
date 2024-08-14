import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">RoyalKing</div>
      <div className="block md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:flex`}>
        <a href="#" className="px-3">Home</a>
        <a href="#" className="px-3">Shop</a>
        <a href="#" className="px-3">About</a>
        <a href="#" className="px-3">Contact</a>
      </nav>
      <div className="hidden md:block">
        <input type="text" placeholder="Search..." className="px-2 py-1 rounded" />
        <span className="ml-4">🛒</span>
        <span className="ml-4">👤</span>
      </div>
    </header>
  );
}

export default Header;
