import axios from "axios"

export default async function fetchData() {

    // const URL = "http://192.168.137.186:5000/markers";
    const URL = "https://trackberry-server.herokuapp.com/markers"
    const remoteData = await axios.get(URL, {
    });
    console.log("Remote Data", remoteData.data);
    return remoteData.data;
}