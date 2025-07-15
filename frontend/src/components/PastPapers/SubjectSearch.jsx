import React from 'react'

const SubjectSearch = (props) => {
  return (
    <div>
        <div>
            <h1>Past Papers</h1>
            <p>Finding past papers during exams is tough, so here they are – all in one place.</p>
            <input type="text" input={props.input} onChange={props.onChange} placeholder="Search Subject" />
        </div>
      
    </div>
  )
}

export default SubjectSearch
