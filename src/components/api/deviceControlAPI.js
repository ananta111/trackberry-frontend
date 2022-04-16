import axios from "axios"

export default async function controlDevice(state) {
    const URL = "http://localhost:5000/gps/" + state;
    const remoteData = await axios.get(URL, {
    });
    console.log("Remote Data", remoteData.data);
    return remoteData.status;
}