import axios from 'axios';

axios.defaults.headers.common['X-app-id-X'] = process.env.APP_ID;
axios.defaults.headers.common['X-UI-Request-X'] = true;

const usersApiUrl = `${process.env.API_URL}/users`;

export default {
  user: {
    loadUser: authHeader =>
      axios.get(`${usersApiUrl}/reload`, authHeader).then(res => res.data),
    login: credentials =>
      axios.post(`${usersApiUrl}/login`, credentials).then(res => res.data),
    logout: authHeader =>
      axios
        .post(`${usersApiUrl}/logout`, null, authHeader)
        .then(res => res.data),
    forgotPassword: credentials =>
      axios
        .post(`${usersApiUrl}/forgotPassword`, credentials)
        .then(res => res.data),
  },
};
