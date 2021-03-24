<!-- Main Application Template. -->
<template>
  <div id="app" class="container-fluid appContainer">

    <nav id="nav" class="navbar navbar-light bg-light navbar-expand-md mb-1 row d-flex justify-content-sm-center">
      <!-- Logo --> 
      <div class="col-sm-3">
      <router-link class="navbar-brand" v-bind:to="{ name: 'home' }">
        Warehouse Store ⚙️
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
            How it Works
          </router-link>

        </div>
      </div>
      </div>
    </nav>
    <router-view />

    <NavCategories />
  </div>
</template>

<script>
import NavCategories from "@/components/NavCategories.vue";

export default {
  components: {
    NavCategories,
  }
};
</script>

<!-- Application-Wide Styles go here. 
     Any valid CSS or SCSS is allowable here. See https://sass-lang.com/documentation/style-rules for info on SCSS -->
<style lang="scss">
.appContainer {
  font-family: "Montserrat", sans-serif;
  padding: 0;
}

#nav {
  color: black;
}
.nav-item {
  color: black;
  font-size: 18px;
  padding: 5px;
}

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
  font-size: 18px;
  border: none;
  border-radius: 2px;
  font-family: "Montserrat", sans-serif;
}

.search:focus {
  outline-offset: 0px;
  outline: none;
}

.btn-search {
  background-color: #626ee3;
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
  background-color: #02203c;
  color: white;
}
</style>
