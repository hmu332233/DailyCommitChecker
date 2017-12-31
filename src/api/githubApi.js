import axios from 'axios';

export function getEvents(userName) {
  return axios.get(`https://api.github.com/users/${userName}/events?per_page=100`);
}

export function getUserInfo(userNmae) {
  return axios.get(`https://api.github.com/users/${userName}`);
}