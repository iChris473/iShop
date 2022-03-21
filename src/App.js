

import {

  Routes,
  Route,
  Link
} from "react-router-dom";
import Cart from "./pages/Cart";

import Home from "./pages/Home";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/single" element={<SingleProduct/>} />
    <Route path="/cart" element={<Cart/>} />
    </Routes>
</>
  );
}

export default App;
