'use client'

import Footer from "lab1/components/footer/page";
import NavbarHome from "lab1/components/nabvar/page";

export default function Layout({ children }) {
    return (
      <main>
        <NavbarHome/>
        {children}
        <Footer/>
      </main>
    );
  }