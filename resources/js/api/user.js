import axios from 'axios';

export const getUser =  async () => {
    try {
        const response = await axios
            .get('api/user', {
                headers: { Authorization: `Bearer ${localStorage.usertoken}` }
            });
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}

export const postUser = async (userData) => {
    try {
        const response = await axios
            .post('api/user', userData, {
                headers: { 
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.usertoken}` }
            });
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
};