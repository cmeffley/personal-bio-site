import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addTech, updateTech, deleteTech } from '../helpers/data/TechData';

function EditTechForm({
  admin, setChangeTech, formTitle, ...changeTechInfo
}) {
  const [editTech, setEditTech] = useState({
    icon: changeTechInfo?.icon || '',
    firebaseKey: changeTechInfo?.firebaseKey || null
  });

  const handleInputChange = (e) => {
    setEditTech((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTech.firebaseKey) {
      updateTech(editTech, admin).then((tech) => setChangeTech(tech));
    } else {
      addTech(editTech, admin).then((response) => setEditTech(response));
      setEditTech({
        icon: '',
        firebaseKey: null
      });
    }
  };

  const goodbyeTech = () => {
    deleteTech(changeTechInfo.firebaseKey, admin).then((techArray) => setChangeTech(techArray));
  };

  return (
    <div>
      <Form
        id='edittechnology'
        onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
      <Label>Icon</Label>
        <Input
          name='icon'
          type='text'
          value={editTech.icon}
          onChange={handleInputChange}
        >
        </Input>
        <Button color='success' type='submit'>Submit</Button>
        <Button color='danger' onClick={goodbyeTech}>Delete</Button>
      </Form>
    </div>
  );
}

EditTechForm.propTypes = {
  techInfo: PropTypes.array,
  setChangeTech: PropTypes.func,
  admin: PropTypes.any,
  formTitle: PropTypes.string
};

export default EditTechForm;
