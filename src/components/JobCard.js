const JobCard = ({ item }) => {
  return (
    <div className="job-card">
      <img src={item.logo} alt="job-avatar" />
      <div className="job-info">
        <p>{item.company}</p>
        <p>{item.position}</p>
        <div className="job-info-secondary">
          <p>{item.postedAt}</p>
          <p>{item.contract}</p>
          <p>{item.location}</p>
        </div>
      </div>
      <div className="job-categories">
        <p>{item.role}</p>
        <p>{item.level}</p>
        <p>{item.languages}</p>
        <p>{item.tools}</p>
      </div>
    </div>
  );
};

export default JobCard;
