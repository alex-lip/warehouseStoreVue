<template>
  <h1>Hello World</h1>
</template>

<script>
import ProductService from "../services/ProductService";

export default {
    name: "Product-Categories",

    data() {
        return {
            filter: {
                id: null,
                pcName: "",
                pcUrl: "",
            },
        }
    },

    methods: {
        getProductCategories() {
            ProductService.getAllProductCategories().then((response) => {
                this.$store.commit("SET_PRODUCT_CATEGORIES". response.data);
            });
        },
    }
}
</script>

<style>

</style>