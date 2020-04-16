import axios from 'axios';

export const register = async user => {
    try {
        const response = await axios
            .post('api/register', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        localStorage.setItem('usertoken', response.data.token);
        // return console.log(response);
    }
    catch (error) {
        return console.error(error);
    }
}

export const login = async user => {
    try {
        const response = await axios
            .post('api/login', {
                email: user.email,
                password: user.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        localStorage.setItem('usertoken', response.data.token);
        // return console.log(response);
    }
    catch (error) {
        return console.error(error);
    }
}

