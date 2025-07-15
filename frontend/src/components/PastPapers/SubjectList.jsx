import React,{useState} from "react";
import SubjectCard from "./SubjectCard";
import "./SubjectList.css"
import subjects from '../../data/subjects';
import SubjectSearch from "./SubjectSearch";


const SubjectList = () => {

  const [subjectInput,setSubjectInput]=useState("");
  // const searchSubject=[];

  function handleChange(e){
    const value=e.target.value.toLowerCase();
    setSubjectInput(value)
  }

  const filteredSubjects=subjects.filter((subject)=>
    subject.title.toLowerCase().startsWith(subjectInput)
  );
  // if(subjects.includes(subjectInput)){
  //   searchSubject.push(subjectInput);
  // }
  // else{
  //   console.log("not present")
  // }
  

  return (
    <div className="parent-container">
      <div>
        <SubjectSearch onChange={handleChange} input={subjectInput}/>
      </div>
      <div className="cards">
        {filteredSubjects.length > 0 ? (filteredSubjects.map((subject, index) => (
          <SubjectCard
            key={index}
            title={subject.title}
            description={subject.description}
            link={subject.link}
          />
        )))
        : (
        <p>No subject found by the name: {subjectInput}</p>)
      }
      </div>
    </div>
  );
};

export default SubjectList;
