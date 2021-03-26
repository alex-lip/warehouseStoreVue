<template>
  <div>
      <div v-for="pc in filteredList" v-bind:key="pc.productCategoryId">
          <ul>
            <li>{{ pc.name }}</li>
      </ul>
      </div>
      
  </div>
</template>

<script>
import productService from "../services/ProductService";

export default {
    name: "ProductCategories",

    data() {
        return {
            // filter: {
            //     id: null,
            //     pcName: "",
            //     pcUrl: "",
            // },
        }
    },

    methods: {
        getProductCategories() {
            productService.getAllProductCategories().then((response) => {
                this.$store.commit("SET_PRODUCT_CATEGORIES", response.data);
            });
        },
    },

    created() {
        // Populate the $store with all product categories
        this.getProductCategories();
    },

    computed: {
        filteredList() {
            let filteredList = this.$store.state.productcategories;

            return filteredList;
        }
    }


}
</script>

<style>

</style>