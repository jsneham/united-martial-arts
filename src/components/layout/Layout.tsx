import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="pt-16 pb-12 min-h-screen bg-black text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
