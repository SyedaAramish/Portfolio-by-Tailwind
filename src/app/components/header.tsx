import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-navy-blue text-black-100 shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold tracking-wider transition-all hover:text-black-400">
          <Link href="/">My Portfolio</Link>
        </h1>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-gray-400 transition-colors duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-400 transition-colors duration-200">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-400 transition-colors duration-200">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-gray-400 transition-colors duration-200">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
