import logo from '../components/Images/Purr logo.png';

function SearchBar() {
    return (
        <div className="flex items-center justify-center h-16 bg-gray-800">
            <div className="fixed top-0 left-0 p-2 z-50">
                <img src={logo} alt="Logo" className="h-12 w-auto rounded-full" />
            </div>
            <input
                type="text"
                placeholder="Search for products..."
                className="w-1/2 p-2 border border-gray-300 rounded-full"
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full">
                Search
            </button>
        </div>
    );
}

export default SearchBar;