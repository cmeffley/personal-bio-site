import React, { useState, useEffect } from 'react';
import { getTechUsed } from '../helpers/data/ProjectData';
import Tech from '../components/Tech';

function TechUsed() {
  const [tech, setTech] = useState([]);
  useEffect(() => {
    getTechUsed().then((response) => setTech(response));
  }, []);
  return (
    <div id='tech-container'>
      {tech.map((techInfo) => (
        <Tech
        key={techInfo.firebaseKey}
        {...techInfo}
        setTech={setTech}
        />
      ))}
    </div>
  );
}

export default TechUsed;
