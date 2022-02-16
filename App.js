import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import CreatingNote from "./CreatingNote";
// import EachNote from "./EachNote";

function App() {
  return (
    <div>
      <Header />
      <CreatingNote />
      <Footer />
    </div>
  );
}

export default App;
