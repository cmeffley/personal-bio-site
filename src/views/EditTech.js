import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getTechUsed } from '../helpers/data/TechData';
import EditTechForm from '../components/EditTechForm';

function EditTech({ admin }) {
  const [changeTech, setChangeTech] = useState([]);

  useEffect(() => {
    getTechUsed().then((response) => setChangeTech(response));
  }, []);

  return (
    <div>
        <EditTechForm
          formTitle='Add Icon'/>
      {changeTech.map((changeTechInfo) => (
        <EditTechForm
          key={changeTechInfo.firebaseKey}
          {...changeTechInfo}
          formTitle='Edit Icon'
          setChangeTech={setChangeTech}
          admin={admin}
        />
      ))}
    </div>
  );
}

EditTech.propTypes = {
  admin: PropTypes.any
};

export default EditTech;
