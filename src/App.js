import JobCard from "./components/JobCard";
import JobSearch from "./components/JobSearch";
import SearchInput from "./components/SearchInput";

import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [clearData, setClearData] = useState([]);

  const [filterLanguage, setFilterLanguage] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const uniqueFilter = Array.from(new Set(filterLanguage));

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const res = await fetch("./data.json");
        const dataRes = await res.json();
        setData(dataRes);
        setClearData(dataRes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    handleFetchData();
  }, []);


  useEffect(() => {
    let result = clearData;
    
    // Apply tag filters if they exist
    if (uniqueFilter.length > 0) {
      result = result.filter(item => {
        return uniqueFilter.every(filter => 
          item.role === filter || 
          item.level === filter || 
          item.languages.includes(filter) || 
          item.tools.includes(filter)
        );
      });
    }
    
    // Apply search term if it exists
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(item => 
        item.position.toLowerCase().includes(term) || 
        item.company.toLowerCase().includes(term) || 
        item.role.toLowerCase().includes(term) ||
        item.level.toLowerCase().includes(term)
      );
    }
    
    setData(result);
  }, [searchTerm, uniqueFilter, clearData]);



  const handleClick = (language) => {
    // Only add the language tag if it doesn't exist already
    if (!filterLanguage.includes(language)) {
      setFilterLanguage(prev => [...prev, language]);
    }
    // No manual data filtering here, let the useEffect handle it
  };

  const handleClear = () => {
    setFilterLanguage([]);
  };

  const handleLastFilter = (item) => {
    // Just update the filter language array, let the useEffect handle filtering
    setFilterLanguage(current => 
      current.filter(lang => lang !== item)
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <main>
      <header>
        <img
          src={"/images/bg-header-desktop.svg"}
          alt="background-header-pattern"
        />
      </header>
      <div className="container">
        <div className="filter-list">
          <div className="search-and-filter">
            <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
            <JobSearch
              filter={uniqueFilter}
              handleClear={handleClear}
              handleLastFilter={handleLastFilter}
            />
          </div>
          {isLoading ? (
            <div className="loading">Loading jobs...</div>
          ) : data.length === 0 ? (
            <div className="no-results">No jobs match your search criteria</div>
          ) : (
            data.map((item, index) => {
              return (
                <JobCard key={index} item={item} handleClick={handleClick} />
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
