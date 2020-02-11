import axios from 'axios';

export function getTasks() {
  return axios.get('http://localhost:5000/tasks');
}

export function getTask(id) {
  return axios.get(`http://localhost:5000/tasks/${id}`);
}

export function postTask(data) {
  return axios({
    method: 'post',
    url: 'http://localhost:5000/tasks/',
    data: data,
  });
}

export function deleteTask(id) {
  return axios.delete(`http://localhost:5000/tasks/${id}`);
}

export function completeTask(id, data) {
  return axios({
    method: 'put',
    url: `http://localhost:5000/tasks/${id}`,
    data: data,
  });
}
