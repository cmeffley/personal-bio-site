import React, { useState, useEffect } from 'react';
import { getTechUsed } from '../helpers/data/TechData';
import EditTechForm from '../components/EditTechForm';

function EditTech() {
  const [changeTech, setChangeTech] = useState([]);

  useEffect(() => {
    getTechUsed().then((response) => setChangeTech(response));
  }, []);

  return (
    <div>
      {changeTech.map((changeTechInfo) => (
        <EditTechForm
          key={changeTechInfo.firebaseKey}
          {...changeTechInfo}
          setChangeTech={setChangeTech}
        />
      ))}
    </div>
  );
}

export default EditTech;
