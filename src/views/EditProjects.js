import React, { useState, useEffect } from 'react';
import EditProjectsForm from '../components/EditProjectsForm';
import { getAllProjects } from '../helpers/data/ProjectData';

function EditProjects() {
  const [changeProjects, setChangeProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then((response) => setChangeProjects(response));
  }, []);
  return (
    <div>
      {changeProjects.map((projectInfo) => (
         <EditProjectsForm
            key={projectInfo.firebaseKey}
            {...projectInfo}
            setChangeProjects={setChangeProjects}
            // {Add admin user}
          />
      ))}
    </div>
  );
}

export default EditProjects;
