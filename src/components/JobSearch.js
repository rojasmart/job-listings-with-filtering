const JobSearch = ({ filter, handleClear }) => {
  return (
    <div className="job-card">
      {filter.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
      <div className="clear" onClick={handleClear}>
        {!!filter.length && <span>clear</span>}
      </div>
    </div>
  );
};

export default JobSearch;
