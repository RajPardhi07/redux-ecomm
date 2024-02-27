import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import ProductDetails from "./components/ProductDetails"
import Cart from "./components/Cart"


const App = () => {
  return (
    <div>

      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      

       <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>

        
        <Route path="/product/:id" element={<ProductDetails/>}/>
        
      </Routes>
    </div>
  )
}

export default App