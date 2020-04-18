import axios from 'axios';

export const setAdmin = async user => {
    try {
        const response = await axios
            .post(`api/admin/set/${user.id}`, user, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.usertoken}`
                }
            });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const deleteAdmin = async id => {
    try {
        const response = await axios
            .delete(`api/user/delete/${id}`, {
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
        console.log(response)
        return response;
    } catch (error) {
        console.error(error);
    }
}