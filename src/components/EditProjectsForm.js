import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Label,
  Input,
} from 'reactstrap';
import { updateProject, deleteProject, addProject } from '../helpers/data/ProjectData';

function EditProjectsForm({
  admin, setChangeProjects, formTitle, ...projectInfo
}) {
  const [editProject, setEditProject] = useState({
    title: projectInfo?.title || '',
    screenshot: projectInfo?.screenshot || '',
    description: projectInfo?.description || '',
    technologiesUsed: projectInfo?.technologiesUsed || '',
    githubUrl: projectInfo?.githubUrl || '',
    url: projectInfo?.url || '',
    firebaseKey: projectInfo?.firebaseKey || null
  });

  const handleInputChange = (e) => {
    setEditProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProject.firebaseKey) {
      updateProject(editProject, admin).then((project) => setChangeProjects(project));
    } else {
      addProject(editProject, admin).then((response) => setEditProject(response));
      setEditProject({
        title: '',
        screenshot: '',
        description: '',
        technologiesUsed: '',
        githubUrl: '',
        url: '',
        firebaseKey: null
      });
    }
  };

  const goodbyeProject = () => {
    deleteProject(projectInfo.firebaseKey, admin).then((projectArray) => setChangeProjects(projectArray));
  };

  return (
    <div className='edit-form'>
      <Form
        id='editProjects'
        onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <Label>Title</Label>
        <Input
          name='title'
          type='text'
          value={editProject.title}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Screenshot</Label>
        <Input
          name='screenshot'
          type='text'
          value={editProject.screenshot}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Description</Label>
        <Input
          name='description'
          type='text'
          value={editProject.description}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Technologies Used</Label>
        <Input
          name='technologiesUsed'
          type='text'
          value={editProject.technologiesUsed}
          onChange={handleInputChange}
        >
        </Input>
        <Label>GitHub Repository</Label>
        <Input
          name='githubUrl'
          type='text'
          value={editProject.githubUrl}
          onChange={handleInputChange}
        >
        </Input>
        <Label>Live Site</Label>
        <Input
          name='url'
          type='text'
          value={editProject.url}
          onChange={handleInputChange}
        >
        </Input>
        <Button color='success' type='submit'>Submit</Button>
        <Button color='danger' onClick={goodbyeProject}>Delete</Button>
      </Form>
      <hr />
    </div>
  );
}

EditProjectsForm.propTypes = {
  projectInfo: PropTypes.object,
  admin: PropTypes.any,
  setChangeProjects: PropTypes.func,
  formTitle: PropTypes.string
};

export default EditProjectsForm;
