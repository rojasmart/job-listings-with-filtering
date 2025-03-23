const SearchInput = ({ searchTerm, handleSearch }) => {
    return (
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search by position, title, company..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button 
            className="search-clear-btn" 
            onClick={() => handleSearch("")}
          >
            ×
          </button>
        )}
      </div>
    );
  };
  
  export default SearchInput;