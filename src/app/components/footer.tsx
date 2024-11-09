// src/components/footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-100 py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm hover:scale-105 transition-transform duration-300">
          &copy; 2024 Syeda Aramish. All rights reserved.
        </p>
        <div className="mt-2 text-gray-400 text-xs">
          <p>Follow me on:</p>
          <p className="hover:text-gray-200 cursor-pointer">Instagram | LinkedIn | GitHub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
