import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import EditProjectsForm from '../components/EditProjectsForm';
import { getAllProjects } from '../helpers/data/ProjectData';

function EditProjects({ admin }) {
  const [changeProjects, setChangeProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then((response) => setChangeProjects(response));
  }, []);

  return (
    <div>
      <EditProjectsForm
        formTitle='Add Project'/>
      {changeProjects.map((projectInfo) => (
         <EditProjectsForm
            key={projectInfo.firebaseKey}
            {...projectInfo}
            formTitle='Edit Project'
            setChangeProjects={setChangeProjects}
            admin={admin}
          />
      ))}
    </div>
  );
}

EditProjects.propTypes = {
  admin: PropTypes.any
};

export default EditProjects;
