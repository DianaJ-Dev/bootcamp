'use client'

import Footer from "happy-travels/components/footer/page";
import NavbarHome from "happy-travels/components/nabvar/page";

export default function Layout({ children }) {
    return (
      <main>
        <NavbarHome/>
        {children}
        <Footer/>
      </main>
    );
  }