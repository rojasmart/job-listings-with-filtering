const JobSearch = ({ filter }) => {
  return (
    <div className="job-card search">
      {filter.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </div>
  );
};

export default JobSearch;
