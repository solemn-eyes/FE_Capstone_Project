{/* This section will have the product details*/}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../services/cartSlice";
import hero from "../components/Images/Shopping.jpg";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative" 
               style={{ backgroundImage: `url(${hero})` }}
        >
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative w-full z-10 flex flex-col items-center bg-white bg-opacity-40 backdrop-blur-sm">
                <h1 className="text-center font-bold text-2xl">{product?.title}</h1>
                <p className="align-middle">{product?.description}</p>
                <div className="flex items-center">
                    <img src={product?.image} alt={product?.title} />
                </div>
                <div className="flex items-center justify-between p-4 gap-4">
                    <p className="font-bold text-3xl">Price: ${product?.price}</p>
                    <button
                        className="bg-blue-600 rounded-full text-white px-6 py-3 border border-spacing-1"
                        onClick={() => dispatch(addItem(product))}
                        disabled={!product}
                    >
                        Add to cart
                    </button>
                </div>

            </div>

            
        </div>
    );
};

export default ProductDetails;
