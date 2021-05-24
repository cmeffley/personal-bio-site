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
const updateProject = (project) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/projects/${project.firebaseKey}.json`, project)
    .then(() => getAllProjects().then((projectArray) => resolve(projectArray)))
    .catch((error) => reject(error));
});

// DELETE PROJECT
const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => getAllProjects()).then((projectArray) => resolve(projectArray))
    .catch((error) => reject(error));
});

// ADD PROJECT
const addProject = (project) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, project)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, body)
        .then(() => {
          getAllProjects().then((projectsArray) => resolve(projectsArray));
        });
    })
    .catch((error) => reject(error));
});

// GET ALL TECH
const getTechUsed = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/tech.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export {
  getAllProjects,
  getTechUsed,
  updateProject,
  deleteProject,
  addProject
};
