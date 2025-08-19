{/* Example of using Fake Store API to fetch products */}
{/* This I'll be using on my ProductList component to display products dynamically */}

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response => response.json()))
            .then((data) => {
                const start = (page - 1) * 8;
                const end = start + 8;
                setProducts(previousProducts => [...previousProducts, ...data.slice(start, end)]);
            });
    }, [page]);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
            {products.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id}>
                    <div className="border bg-white p-2 hover:shadow-lg cursor-pointer">
                        <img 
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-contain"
                        />
                        <h3 className="font-semibold">{product.title}</h3>
                        <p>${product.price}</p>
                    </div>
                </Link>
            ))}

            {/* Load more button to fetch more products */}
            <div className="col-span-full flex justify-center">
                <button onClick={() => setPage(previousProducts => previousProducts + 1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Load More
                </button>
            </div>
        </div>
    );
}

export default ProductGrid;