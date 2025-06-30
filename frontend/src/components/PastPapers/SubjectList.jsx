import React from "react";
import SubjectCard from "./SubjectCard";
import "./SubjectList.css"
import subjects from '../../data/subjects';


const SubjectList = () => {

  return (
    <div className="parent-container">
      <div className="cards">
        {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            title={subject.title}
            description={subject.description}
            link={subject.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
