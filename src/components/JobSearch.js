const JobSearch = ({ filter, handleClear, handleLastFilter }) => {
  return (
    <div className="job-card">
      {filter.map((item, index) => {
        return (
          <span key={index} className="job-category-filter">
            {item}
            <button onClick={handleLastFilter}>
              <img src="/images/icon-remove.svg" alt="icon-cross" />
            </button>
          </span>
        );
      })}
      <div className="clear" onClick={handleClear}>
        {!!filter.length && <span className="job-category">clear</span>}
      </div>
    </div>
  );
};

export default JobSearch;
