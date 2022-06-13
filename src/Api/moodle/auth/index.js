import axios from 'axios';
import {baseURL, moodleURL} from '../config';

async function getCurrentUser(token, username) {
  const resp = await axios.get(
    `${moodleURL}${token}&wsfunction=core_user_get_users_by_field&field=username&values[0]=${username}&moodlewsrestformat=json`,
  );
  const user = resp.data[0];
  const userId = user.id;
  return userId;
}
export async function login(username, password) {
  const respAuth = await axios.get(
    `${baseURL}login/token.php?username=${username}&password=${password}&service=moodle_mobile_app`,
  );
  const data = respAuth.data;
  if (data.error) {
    throw 'Error';
  }
  const {token} = data;
  console.log('Token: ', token);
  console.log('Data: ', data);
  return token;
}
export const loginMoodle = async (username, password) => {
  const token = await login(username, password);
  const user = await getCurrentUser(token, username);
  return {token, user};
};
