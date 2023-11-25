import JobCard from "./components/JobCard";
import JobSearch from "./components/JobSearch";

import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
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
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };
    handleFetchData();
  }, []);

  const handleClick = (language) => {
    setFilterLanguage((oldClick) => [...oldClick, language]);
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
          <JobSearch filter={uniqueFilter} />
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
