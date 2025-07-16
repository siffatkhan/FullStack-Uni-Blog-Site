import React from 'react';
import './SubjectSearch.css';

const SubjectSearch = (props) => {
  return (
    <div className="search-container">
      <h1>Past Papers</h1>
      <p>Finding past papers during exams is tough, so here they are – all in one place.</p>
      <input
        type="text"
        value={props.input}
        onChange={props.onChange}
        placeholder="Search Subject"
      />
    </div>
  );
};

export default SubjectSearch;
