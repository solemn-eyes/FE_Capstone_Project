{/* Creating the navigation bar */}
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

function Navbar(){
    return(
        <nav className="fixed top-0 right-0 p-4 bg-gray-800 shadow-md">
            <ul className="flex space-x-4">
                <li><Link to="/Home" className="text-blue-500 hover:underline">Home</Link></li>
                <li><Link to="/ProductList" className="text-blue-500 hover:underlin">Products</Link></li>
                <li><Link to="/cart" className="text-blue-500 hover:underline">Cart</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;