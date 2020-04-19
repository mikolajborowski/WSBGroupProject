import axios from 'axios';

export const postChannel = async channels => {
    try {
        const response = await axios
            .post('api/channels/save', channels, {
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

export const deleteChannel = async id => {
    try {
        const response = await axios
            .post(`api/channels/delete/${id}`, id, {
                headers: {
                    Authorization: `Bearer ${localStorage.usertoken}`
                }
            });
        return response;
    } catch (error) {
        console.error(error);
    }
}


export const getChannelsList = async () => {
    try {
        const response = await axios
            .get(`api/channels/list`, {
                headers: {
                    Authorization: `Bearer ${localStorage.usertoken}`
                }
            });
        return response;
    } catch (error) {
        console.error(error);
    }
}


export const getChannelsHTML = async () => {
    try {
        const response = await axios
            .get(`api/channels/format`, {
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