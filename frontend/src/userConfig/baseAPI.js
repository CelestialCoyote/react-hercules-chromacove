import Axios from "axios";


const backend = "http://192.168.1.19:3009";

const baseAPI = Axios.create({
    baseURL: `${backend}/hercules/`
});


export { baseAPI };
