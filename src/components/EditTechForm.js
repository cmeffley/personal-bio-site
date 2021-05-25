import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { addTech, updateTech } from '../helpers/data/TechData';

function EditTechForm({ admin, setTech, ...changeTechInfo }) {
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
      updateTech(editTech, admin).then((techArray) => setEditTech(techArray));
    } else {
      addTech(editTech, admin).then((techArray) => setEditTech(techArray));

      setEditTech({
        name: '',
        imageUrl: '',
        position: '',
        country: '',
        firebaseKey: null
      });
    }
  };

  // const goodbyeTech = () => {
  //   deleteTech(changeTechInfo.firebaseKey, admin).then((techArray) => setTech(techArray));
  // };

  return (
    <div>
      <Form
        id='edittechnology'
        onChange={handleSubmit}>
      <Label>Icon</Label>
        <Input
          name='icon'
          type='text'
          value={editTech.icon}
          onChange={handleInputChange}
        >
        </Input>
        <Button color='success' type='submit'>Submit</Button>
        <Button color='danger' type='submit'>Delete</Button>
      </Form>
    </div>
  );
}

EditTechForm.propTypes = {
  techInfo: PropTypes.array,
  setTech: PropTypes.func,
  admin: PropTypes.any
};

export default EditTechForm;
