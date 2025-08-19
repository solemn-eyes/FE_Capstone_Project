import hero from '../components/Images/Shopping.jpg'
import ProductGrid from '../services/ProductGrid'
import Banner from './Banners';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${hero})` }} 
        >
           <div className="absolute inset-0 backdrop-blur-sm"></div>
           <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 w-full flex flex-col items-center">
                    {/* Creating the main content area */}
                    <main className="flex flex-col items-center justify-center p-4">
                        <Banner />
                        {/* Making the Product List */}
                        <div className="w-full rounded-lg shadow-lg bg-white bg-opacity-60 backdrop-blur-sm">
                            <ProductGrid />
                        </div>
                        
                    </main>

                    <footer className="fixed bottom-0 left-0 w-full z-40 bg-white bg-opacity-80 text-black p-4 text-center shadow">
                        <p>&copy; 2023 E-commerce Project. All rights reserved.</p>
                    </footer>
                </div>
            
        </div>
    );
}

export default Home;