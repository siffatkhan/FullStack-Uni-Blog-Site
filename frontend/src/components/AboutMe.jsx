import React from 'react';

const DeveloperInfo = () => {
  return (
    <div className="developerInfo" style={{ textAlign: 'center', padding: '20px' , border:'1px solid black'}}>
      <img
        src="/sifatPic.png" // public folder usage
        alt="Siffat Ullah"
        style={{ width: '150px', borderRadius: '50%' }}
      />
      <h1>Siffat Ullah</h1>
      <p>
        👋 Hi, I'm Siffat Ullah, a passionate Computer Science student with skills in React,
        Node.js, and fullstack web development. I love building impactful apps and continuously
        learning new technologies to solve real-world problems efficiently.
      </p>
      <p>
        📫 Feel free to connect with me for collaboration, learning, or any tech discussions.
      </p>
    </div>
  );
};

export default DeveloperInfo;
