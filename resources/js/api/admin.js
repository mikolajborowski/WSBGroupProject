import axios from 'axios';

export const setAdmin = async id => {
    try {
        const response = await axios
            .post(`api/admin/set/${id}`, id, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.usertoken}`
                }
            });
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const deleteAdmin = async id => {
    try {
        const response = await axios
            .post(`api/user/delete/${id}`, id, {
                headers: {
                    Authorization: `Bearer ${localStorage.usertoken}`
                }
            });
        console.log(response)
        return response;
    } catch (error) {
        console.error(error);
    }
}


export const getAdminList = async () => {
    try {
        const response = await axios
            .get(`api/admin/list`, {
                headers: {
                    Authorization: `Bearer ${localStorage.usertoken}`
                }
            });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}