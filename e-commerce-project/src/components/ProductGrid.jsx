{/* Example of using Fake Store API to fetch products */}

import { useEffect, useState } from 'react';

function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response => response.json()))
            .then((data) => setProducts(data));
    }, []);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
            {products.map((product) => (
                <div key={product.id} className="bg-white p-4 shadow hover:shadow-lg">
                    <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
                    <h3 className="font-bold text-sm mt-2">{product.title}</h3>
                    <p className="text-orange-500">${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;