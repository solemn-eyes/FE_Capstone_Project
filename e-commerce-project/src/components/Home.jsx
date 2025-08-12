import hero from '../components/Images/Shopping.jpg'

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${hero})` }} 
        >
           <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div>
                    {/* Creating the main content area */}
                    <main>

                    </main>
                </div>
            
        </div>
    );
}

export default Home;