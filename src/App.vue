<template>
  <div id="app">
    <v-app>
    <Navbar />

    <v-main>
      <router-view></router-view>
    </v-main>
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
