import JobCard from "./components/JobCard";
import JobSearch from "./components/JobSearch";

import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

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

  console.log(data);

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
          <JobSearch clickedLanguage={clickedLanguage} />
          {data.map((item) => {
            return <JobCard item={item} clickedLanguage={clickedLanguage} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
