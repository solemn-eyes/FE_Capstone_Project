import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/navbar'
import ProductList from './components/ProductList'


function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
