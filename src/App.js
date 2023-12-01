import React, { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import CustomNavBar from "./Components/UI/CustomNavBar";
import AddForm from "./Components/AddProduct/AddForm";

const App = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <CustomNavBar onCartClick={() => setModalShow((prev) => !prev)} />
      <AddForm />
      <Cart show={modalShow} onHide={() => setModalShow((prev) => !prev)} />
    </div>
  );
};

export default App;
