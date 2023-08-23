import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'efb11d85087346cdaf23d9590868df00'
    }
})