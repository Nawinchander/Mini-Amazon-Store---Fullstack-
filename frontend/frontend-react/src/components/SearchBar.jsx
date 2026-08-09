function SearchBar({ search, setSearch }) {

    return (
        <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export default SearchBar;


// Explanation

// The parent component gives:

// search
// setSearch

// The input updates the search value.

// For example:

// Search: phone

// The dashboard can then display only products containing "phone".





