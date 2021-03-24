<template>
  <div class="home">
    <div class="header container-fluid">
      <!-- HEADER TEXT -->
      <!--
      <div class="row">
        <div class="col-lg-12 headerText d-flex justify-content-center">
          <vue-typed-js
            :loop="true"
            :typeSpeed="100"
            :backSpeed="80"
            :strings="['Bearings.', 'Sprockets.', 'V-Belts.', 'Oil Seals.']"
          >
            <h1>
              The easiest place to find <br /><span class="typing"></span>
            </h1>
          </vue-typed-js>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);

export default {
  name: "home",
};
</script>

<style></style>
