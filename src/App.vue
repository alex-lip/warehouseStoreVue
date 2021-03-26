<!-- Main Application Template. -->
<template>
  <div id="app" class="container-fluid appContainer">

    <nav id="nav" class="navbar navbar-light bg-light navbar-expand-md mb-1 row no-gutters d-flex justify-content-sm-center">
      <!-- Logo --> 
      <div class="col-sm-3 pl-2">
      <router-link class="navbar-brand" v-bind:to="{ name: 'home' }">
         <h1>⚙️ Warehouse Store</h1>
      </router-link>
      </div>

      <!-- Search Bar -->
      <div class="col-sm-6">
        <div class="searchBar d-flex mx-auto">
        <input
          type="text"
          class="search"
          placeholder="Search part # or product name"
        />
        <button class="btn btn-search"><i class="fas fa-search"></i></button>
      </div>
      </div>
      
      
      <div class="col-sm-3">
      <!-- Nav Hamburger -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">


        <div class="ml-auto">
          <router-link class="nav-item mr-sm-2" v-bind:to="{ name: 'login' }">
            FAQ
          </router-link>

          <router-link class="nav-item mr-sm-2" v-bind:to="{ name: 'login' }">
            About
          </router-link>

        </div>
      </div>
      </div>
    </nav>
    <router-view />

    <NavCategories />
    <HomeHero />
    <HomeCategories />
    <ProductCategories />
    <FooterComponent />

  </div>
</template>

<script>
import NavCategories from "@/components/NavCategories.vue";
import HomeHero from "@/components/HomeHero.vue";
import HomeCategories from "@/components/HomeCategories.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ProductCategories from "@/components/ProductCategories.vue"

import ProductService from "./services/ProductService";

export default {
  components: {
    NavCategories,
    HomeHero,
    HomeCategories,
    FooterComponent,
    ProductCategories,
  }
};
</script>

<!-- Application-Wide Styles go here. 
     Any valid CSS or SCSS is allowable here. See https://sass-lang.com/documentation/style-rules for info on SCSS -->
<style lang="scss">
:root {
    --primary-color: #02203C;
    --secondary-color: #626EE3;
    --dark-color: #15314B;
    --accent-color: #F44292;
    --light-color: #f4f4f4;
    --success-color: #5CB85C;
    --error-color: #D9534F;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0
}


.appContainer {
  font-family: "Montserrat", sans-serif;
  padding: 0;
}

#nav {
  color: black;
  padding: 0;
}
.nav-item {
  color: black;
  font-size: 18px;
}

/* Logo Style */
.navbar-brand {
  color: black;
  font-size: 32px;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
}

.navbar-brand:hover {
  color: black;
}

.nav-item:hover {
  color: (27, 5, 128);
  text-decoration: none;
}

/* Search Bar */

.searchBar {
  border: 1px solid black;
  border-radius: 2px;
  width: 400px;
}

.search {
  height: 45px;
  padding-left: 15px;
  width: 320px;
  font-size: 16px;
  font-weight: 300;
  border: none;
  border-radius: 2px;
  font-family: "Montserrat", sans-serif;
}

.search:focus {
  outline-offset: 0px;
  outline: none;
}

.btn-search {
  background-color: var(--secondary-color);
  color: white;
  height: 47px;
  width: 80px;
  padding: 0;
  margin: 0;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.btn-search:hover {
  background-color: var(--primary-color);
  color: white;
}

/* Utility CSS */

.text-primary {
    color: var(--primary-color);
}

.text-secondary {
    color: var(--secondary-color);
}

.text-dark {
    color: var(--dark-color);
}

.text-light {
    color: var(--light-color);
}

.text-accent {
    color: var(--accent-color);
}

/* Background colors */
.bg-dark {
    background-color: var(--primary-color);
}

.bg-light {
  background-color: var(--light-color);
}
/* Text Sizes */
.lead {
    font-size: 20px;
}

.sm {
    font-size: 1rem;
}

.md {
    font-size: 1.2rem;
}

.lg {
    font-size: 2.5rem;
}
.xl {
    font-size: 4rem;
}



</style>
