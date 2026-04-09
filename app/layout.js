import React from 'react';
import './globals.css'; // Import global styles

export const metadata = {
  title: 'StyleSync',
  description: 'A synchronized styling application',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold">StyleSync</h1>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;