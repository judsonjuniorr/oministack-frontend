import axios from "axios";

const api = axios.create({
    baseURL: "https://oministack-backendhw.herokuapp.com",
});

export default api;
