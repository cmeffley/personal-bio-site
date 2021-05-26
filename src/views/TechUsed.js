import React, { useState, useEffect } from 'react';
import { getTechUsed } from '../helpers/data/TechData';
import Tech from '../components/Tech';

function TechUsed() {
  const [tech, setTech] = useState([]);
  useEffect(() => {
    getTechUsed().then((response) => setTech(response));
  }, []);
  return (
    <div id='tech'>
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
