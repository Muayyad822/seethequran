import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const AppShell = ({ children }) => {
  return (
    <div className="min-h-screen bg-void flex flex-col">
      <NavBar />
      <main className="flex-1 relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppShell;
