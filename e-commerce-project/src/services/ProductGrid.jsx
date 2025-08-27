{/* Example of using Fake Store API to fetch products */}

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ProductGrid() {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response => response.json()))
            .then((data) => setProducts(data));
    }, []);

    {/* Making the product grid to display few products */}
    const limitedProducts = products.slice(0, 8);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
            {limitedProducts.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id}>
                    <div className="border p-2 hover:shadow-lg cursor-pointer">
                        <img 
                            src={product.image}
                            alt={product.title}
                            className="h-32 object-contain mx-auto"
                        />
                        <h3 className="font-semibold">{product.title}</h3>
                        <p>${product.price}</p>

                        <div>
                            <button 
                                className="bg-blue-600 rounded-full text-white px-6 py-3 border border-spacing-1"
                                onClick={() => dispatch(addItem(product))}
                                disabled={!product}
                            >
                                Add to cart
                            </button>
                        </div>               
                        
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ProductGrid;