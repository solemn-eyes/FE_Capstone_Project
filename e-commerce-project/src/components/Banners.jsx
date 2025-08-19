import { useState, useEffect } from 'react'; 
import img1 from '../components/Images/1.jpg';
import img2 from '../components/Images/2.jpg';
import img3 from '../components/Images/3.jpg';

const banners = [
    {id: 1, img: img1, alt:"Sale"},
    {id: 2, img: img2, alt:"Free Shipping"},
    {id: 3, img: img3, alt:"Discount"}
];

function Banner() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 3000); // Change banner every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full overflow-hidden relative rounded-full">
            <img src={banners[index].img} 
                 alt={banners[index].alt} 
                 className="w-full max-h-80 object-cover transition-all duration-700" />
        </div>
    );
}

export default Banner;