import axios from 'axios';

const url = 'http://localhost:5000/tasks/';

export function getTasks() {
  return axios.get(url);
}

export function getTask(id) {
  return axios.get(url + id);
}

export function postTask(data) {
  return axios.post(url, data);
}

export function deleteTask(id) {
  return axios.delete(url + id);
}

export function completeTask(id, data) {
  return axios.put(url + id, data);
}
