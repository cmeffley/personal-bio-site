import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

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

// UPDATE TECH
const updateTech = (tech, admin) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/tech/${tech.firebaseKey}.json`, tech)
    .then(() => getTechUsed(admin).then((techArray) => resolve(techArray)))
    .catch((error) => reject(error));
});

// DELETE TECH
const deleteTech = (firebaseKey, admin) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/tech/${firebaseKey}.json`)
    .then(() => getTechUsed(admin)).then((techArray) => resolve(techArray))
    .catch((error) => reject(error));
});

// ADD TECH
const addTech = (tech, admin) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/tech.json`, tech)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/tech/${response.data.name}.json`, body)
        .then(() => {
          getTechUsed(admin).then((techArray) => resolve(techArray));
        });
    })
    .catch((error) => reject(error));
});

export {
  getTechUsed,
  updateTech,
  deleteTech,
  addTech
};
