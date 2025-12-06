import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 80 }}>{children}</main>
      <Footer />
    </>
  );
}
