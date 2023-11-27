const JobCard = ({ item, handleClick }) => {
  //const [clickLanguage, setClickLanguage] = useState([]);

  return (
    <div className="job-card">
      <img src={item.logo} alt="job-avatar" />
      <div className="job-info">
        <div className="job-info-chips">
          <span className="new">{item.new && "new"}</span>
          <span className="featured">{item.featured && "featured"}</span>
        </div>
        <p>{item.company}</p>
        <h3>{item.position}</h3>
        <div className="job-info-secondary">
          <p>{item.postedAt}</p>
          <p>{item.contract}</p>
          <p>{item.location}</p>
        </div>
      </div>
      <div className="job-categories">
        <span onClick={() => handleClick(item.role)} className="job-category">
          {item.role}
        </span>
        <span onClick={() => handleClick(item.level)} className="job-category">
          {item.level}
        </span>
        {item.languages.map((language, index) => {
          return (
            <span
              key={index}
              onClick={() => handleClick(language)}
              className="job-category"
            >
              {language}
            </span>
          );
        })}
        {!!item.tools.length &&
          item.tools.map((tool, index) => {
            return (
              <span
                key={index}
                onClick={() => handleClick(tool)}
                className="job-category"
              >
                {tool}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default JobCard;
