import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b64dca109f374dbbb2cced82b1136395'
    }
})