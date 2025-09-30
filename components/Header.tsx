import React from 'react';

interface HeaderProps {
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-white/85 backdrop-blur-lg border-b border-[#E0E0E0] sticky top-0 z-20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
           <div className="text-center sm:text-left">
                <h1 className="text-2xl font-semibold tracking-tight">
                    <span className="text-[#FDB813]">S</span>kiddo
                </h1>
                <p className="text-xs text-[#666666] uppercase tracking-widest">
                    F1 Data Dashboard
                </p>
           </div>
           {children}
        </div>
      </div>
    </header>
  );
};

export default Header;