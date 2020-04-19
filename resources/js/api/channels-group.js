import axios from 'axios';

export const addGroup = async group => {
    try {
        const response = await axios
            .post('api/group/add', group, {
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

export const renameGroup = async group => {
    try {
        const response = await axios
            .post('api/group/rename', group, {
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

export const addChannelToGroup = async channel => {
    try {
        const response = await axios
            .post('api/group/add/channel', channel, {
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

export const getAllGroups = async () => {
    try {
        const response = await axios
            .get(`api/group/all`, {
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

export const deleteChannelFromGroup = async id => {
    try {
        const response = await axios
            .post(`api/group/delete/channel/${id}`, id, {
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

export const deleteGroup = async id => {
    try {
        const response = await axios
            .post(`api/group/delete/${id}`, id, {
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