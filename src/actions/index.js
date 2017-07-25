import axios from "axios";

let api_key = "4a383239532fe67fc6bd94b115fed322";

let resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?&limit=10' 

//&user_key= + api_key;


export function loadData(item) {
    return (dispatch) => {
        return axios.get(resource_url + "&name=" + item.name + "&location=" + item.origin + "&user_key=" + api_key).then((response) => {
            console.log(response.data);
            dispatch(setData(response.data.data));
        }).catch((error) => {
            throw error;
        })
    }
}

export function setData(data) {
    return {
        type: "SET_DATA",
        data
    }
}
