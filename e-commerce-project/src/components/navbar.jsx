import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const cartItems = useSelector(state => state.cart.items);
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return(
        <nav className="fixed top-0 right-0 p-4 bg-gray-800 shadow-md ">
            <ul className="flex space-x-4">
                <li><Link to="/Home" className="text-blue-500 hover:underline">Home</Link></li>
                <li><Link to="/ProductList" className="text-blue-500 hover:underline">Products</Link></li>
                <li className="relative">
                    <Link to="/cart" className="text-blue-500 hover:underline">Cart</Link>
                    {totalCount > 0 && (
                        <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                            {totalCount}
                        </span>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;