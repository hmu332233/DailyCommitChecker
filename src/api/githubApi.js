import axios from 'axios';

export function getEvents(userName) {
    return axios.get(`https://api.github.com/users/${userName}/events`);
}