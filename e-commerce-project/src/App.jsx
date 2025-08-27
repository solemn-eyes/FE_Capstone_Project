import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/navbar'
import ProductList from './components/ProductList'
import SearchBar from './components/searchbar'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  
  return (
    <>
      <Router>
        <SearchBar />
        <Navbar />
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      

      </Router>
    </>
  );
}

export default App
