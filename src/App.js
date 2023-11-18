import backgroundHeader from "./assets/bg-header-desktop.svg";

function App() {
  return (
    <>
      <header>
        <img src={backgroundHeader} alt="background-header-pattern" />
      </header>
      <div className="container">
        <div className="filter-list">
          <div className="job-card"></div>
        </div>
      </div>
    </>
  );
}

export default App;
