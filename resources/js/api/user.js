import axios from 'axios';

export const getUser =  async () => {
    try {
        const response = await axios
            .get('api/user', {
                headers: { Authorization: `Bearer ${localStorage.usertoken}` }
            });
        console.log(response);
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}

export const postUser = async () => {};