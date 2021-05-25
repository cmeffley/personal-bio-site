import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
// GET ALL PROJECTS
const getAllProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// UPDATE PROJECT
const updateProject = (project, admin) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/projects/${project.firebaseKey}.json`, project)
    .then(() => getAllProjects(admin).then((projectArray) => resolve(projectArray)))
    .catch((error) => reject(error));
});

// DELETE PROJECT
const deleteProject = (firebaseKey, admin) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => getAllProjects(admin)).then((projectArray) => resolve(projectArray))
    .catch((error) => reject(error));
});

// ADD PROJECT
const addProject = (project, admin) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, project)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, body)
        .then(() => {
          getAllProjects(admin).then((projectsArray) => resolve(projectsArray));
        });
    })
    .catch((error) => reject(error));
});

export {
  getAllProjects,
  updateProject,
  deleteProject,
  addProject
};
