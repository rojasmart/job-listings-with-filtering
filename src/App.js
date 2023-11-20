import backgroundHeader from "./assets/bg-header-desktop.svg";

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
                <p>{item.company}</p>
                <p>{item.position}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
