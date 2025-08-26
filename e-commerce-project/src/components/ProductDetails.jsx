{/* This section will have the product details*/}
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchProduct = async () => {
            try{
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct (response.data);
            } catch (err) {
                setError('Product not found!');
            } finally {
                setLoading(false)
            }
        };
        fetchProduct();
    }, [id]);
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div className="">
            <h1 className="text-center font-bold text-2xl">{product?.title}</h1>
            <p className="align-middle">{product?.description}</p>
            <div className="flex items-center">
                <img src={product?.image} alt={product?.title} />
            </div>
            <div className="flex items-center justify-between p-4">
                <p className="font-bold text-3xl">Price: ${product?.price}</p>
                <button className="bg-blue-600 rounded-full text-white px-6 py-3 border border-spacing-1">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
