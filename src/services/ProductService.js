import axios from "axios";

export default {

    getAllProducts() {
        return axios.get("/ballbearings");
    },

    getAllProductCategories() {
        return axios.get("/products");
    }
};