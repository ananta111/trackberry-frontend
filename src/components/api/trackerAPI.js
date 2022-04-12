import axios from "axios"

export default async function fetchData() {
    const URL = "http://localhost:5000/markers";
    const remoteData = await axios.get(URL, {
    });
    console.log("Remote Data", remoteData.data);
    return remoteData.data;
}