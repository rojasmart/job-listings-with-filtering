const JobCard = ({ item, handleClick }) => {
  //const [clickLanguage, setClickLanguage] = useState([]);

  return (
    <div className="job-card">
      <img src={item.logo} alt="job-avatar" />
      <div className="job-info">
        <p>{item.company}</p>
        <h3>{item.position}</h3>
        <div className="job-info-secondary">
          <p>{item.postedAt}</p>
          <p>{item.contract}</p>
          <p>{item.location}</p>
        </div>
      </div>
      <div className="job-categories">
        <span onClick={() => handleClick(item.role)}>{item.role}</span>
        <span onClick={() => handleClick(item.level)}>{item.level}</span>
        {item.languages.map((language, index) => {
          return (
            <span key={index} onClick={() => handleClick(language)}>
              {language}
            </span>
          );
        })}
        {!!item.tools.length && (
          <span onClick={() => handleClick(item.tools)}>{item.tools}</span>
        )}
      </div>
    </div>
  );
};

export default JobCard;
