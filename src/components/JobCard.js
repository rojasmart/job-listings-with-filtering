import { useState } from "react";

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
        <p>{item.role}</p>
        <p>{item.level}</p>
        {item.languages.map((language) => {
          return <span onClick={() => handleClick(language)}>{language}</span>;
        })}
        {!!item.tools.length && <span>{item.tools}</span>}
      </div>
    </div>
  );
};

export default JobCard;
