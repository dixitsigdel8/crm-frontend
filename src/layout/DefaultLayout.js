import React from "react";
import { Footer } from "./partial/Footer";
import { Header } from "./partial/Header";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="Header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
