const JobSearch = ({ filter }) => {
  return (
    <div className="job-card search">
      {filter.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
      <div className="clear">{!!filter.length && <span>clear</span>}</div>
    </div>
  );
};

export default JobSearch;
