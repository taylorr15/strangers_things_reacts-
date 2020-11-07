const BASE_URL = 'https://strangers-things.herokuapp.com/api/2007-LSU-RM-WEB-PT'

import axios from 'axios';

function getToken() {
    return localStorage.getItem('bearer-token');
}

function setToken(token) {
    localStorage.setItem('bearer-token', `Bearer ${ token }`);
}

export async function registerUser(username, password) {
    try {
        const { data } = await axios.post(`${ BASE_URL }/users/register`, {
            user: {
                username: username,
                password: password
            }
        });

        console.log(data);
    }   catch (error) {
        console.error(error);
    }
}

export async function loginUser(username, password) {
    try {
        const { data } = await axios.post(`${ BASE_URL }/users/login`, {
            user: {
                username: username,
                password: password
            }
        });

        const token = data.data.token;
        setToken(token);
    }   catch (error) {
        console.error(error);
    }
}

export async function whoAmI() {
    try {
        const token = getToken();
        console.log('token is', token);

        const { data } = await  axios.get(`${ BASE_URL }/users/me`, {
            headers: {
                'Authorization': token
            }
        })

        console.log(data);
    }   catch (error) {
        console.error(error);
    }
}
