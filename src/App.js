import JobCard from "./components/JobCard";
import JobSearch from "./components/JobSearch";

import { useState, useEffect, lazy } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [filterLanguage, setFilterLanguage] = useState([]);

  const uniqueFilter = Array.from(new Set(filterLanguage));

  useEffect(() => {
    setIsLoading(true);
    const handleFetchData = async () => {
      try {
        const res = await fetch("./data.json");
        const dataRes = await res.json();
        setData(dataRes);
        setFilteredData(dataRes);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };
    handleFetchData();
  }, []);

  const handleClick = (language) => {
    const newItem = data.filter((newVal) => {
      return (
        newVal.role.includes(language) ||
        newVal.level.includes(language) ||
        newVal.tools.includes(language) ||
        newVal.languages.includes(language)
      );
    });
    setData(newItem);
    setFilterLanguage((oldClick) => [...oldClick, language]);
  };

  const handleClear = () => {
    setData(filteredData);
    setFilterLanguage([]);
  };

  const handleLastFilter = (item) => {
    const removedItem = item.filter((i) => {
      return i !== item;
    });
    return removedItem;
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
          <JobSearch
            filter={uniqueFilter}
            handleClear={handleClear}
            handleLastFilter={handleLastFilter}
          />
          {data.map((item, index) => {
            return (
              <JobCard key={index} item={item} handleClick={handleClick} />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
