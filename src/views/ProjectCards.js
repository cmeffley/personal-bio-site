import React, { useState, useEffect } from 'react';
import Projects from '../components/Projects';
import { getAllProjects } from '../helpers/data/ProjectData';

function ProjectCards() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects(projects).then((response) => setProjects(response));
    console.warn(projects);
  }, []);
  return (
    <div id='card-container'>
      {projects.map((projectInfo) => (
        <Projects
          key={projectInfo.firebaseKey}
          {...projectInfo}
          setProjects={setProjects}
          />
      ))}
    </div>
  );
}

export default ProjectCards;
