import backgroundHeader from "./images/bg-header-desktop.svg";

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
        <img src={backgroundHeader} alt="background-header-pattern" />
      </header>
      <div className="container">
        <div className="filter-list">
          {data.map((item) => {
            return (
              <div className="job-card">
                <img src={item.logo} alt="job-avatar" />
                <div className="job-info">
                  <p>{item.company}</p>
                  <p>{item.position}</p>
                  <p>{item.postedAt}</p>
                  <p>{item.contract}</p>
                  <p>{item.location}</p>
                </div>
                <div className="job-categories">
                  {item.languages.map((language) => {
                    return <span>{language}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
