import React from "react";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Promocion from "./components/Promocion";




function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      <Promocion/>
      <Footer/>
    </div>
  );
}

export default App;
