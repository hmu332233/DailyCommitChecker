import axios from 'axios';

export function getEvents(userName) {
  return axios.get(`https://api.github.com/users/${userName}/events?per_page=100`);
}

export async function getUserInfo(userName) {
  
  function requestUserInfo(_userName) {
    return axios.get(`https://api.github.com/users/${userName}`);
  }
  
  try {
  	const userInfo = await requestUserInfo(userName);
    if (userInfo.status === 200) {
      return userInfo;
    } else {
      return null;
    }
  } catch(err) {
    return null;
	}
}