
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../components/Images/Purr logo.png";

function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [searched, setSearched] = useState(false);
    const navigate = useNavigate();

    const handleSearch = async () => {
        setSearched(true);
        setResults([]);
        if (!query) return;
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const products = await res.json();
            const matches = products.filter(product =>
                product.title.toLowerCase().startsWith(query.toLowerCase())
            );
            setResults(matches);
        } catch (err) {
            console.error('Search failed:', err);
            setResults([]);
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center h-16 bg-gray-800 w-full">
                <img src={logo} alt="Logo" className="fixed top-0 left-0 p-1 h-12 w-auto rounded-full" />
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="w-1/2 p-2 border border-gray-300 rounded-full"
                    onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
                />
                <button
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {/* Results List */}
            {searched && (
                <div className="w-1/2 bg-white shadow rounded mt-2 p-2 max-h-64 overflow-y-auto">
                    {results.length > 0 ? (
                        results.map(product => (
                            <Link
                                to={`/products/${product.id}`}
                                key={product.id}
                                className="block px-2 py-1 hover:bg-gray-100 border-b last:border-b-0"
                            >
                                {product.title}
                            </Link>
                        ))
                    ) : (
                        <div className="text-gray-500 text-center">No products found.</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchBar;