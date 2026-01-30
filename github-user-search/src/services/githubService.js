import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const fetchUserData = axios.get({
    baseURL: GITHUB_API_URL,
    headers: {
        Authorization: `Bearer ${GITHUB_API_KEY}`,
    },

    params: {
        per_page: 20,
    },

});

export default fetchUserData;