{/* This section will have the product details*/}
import { useParams, useState, useEffect } from "react";

function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if(!product) return <p>Loading...</p>;

    return (
        <div className="max-w-xl mx-auto p-4">
            <img
                src={product.image}
                alt={product.title}
                className="h-60 object-contain mx-auto"
            />
            <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
            <p className="text-gray-600 mt-2">${product.price}</p>
            <p className="mt-4">{product.description}</p>
        </div>
    );
}

export default ProductDetails;