<template>
  <nav>
    <v-app-bar class="nav" flat app>
      <v-toolbar-title class="text-uppercase grey--text mx-4">
        <span class="font-weight-light">Movie</span>
        <span>APP</span>
      </v-toolbar-title>

      <router-link class="nav-links" v-for="link in links" :key="link.path" :to="link.path">
        <v-btn class="grey--text" text>
          {{ link.name }}
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
          placeholder="Search..."
        ></v-text-field>
      </v-responsive>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Homepage", path: "/" },
        { name: "Latest", path: "/latest" },
        { name: "Popular", path: "/popular" },
        { name: "Top Rated", path: "/top-rated" },
        { name: "Recommended", path: "/recommended" },
      ],
    };
  },
};
</script>

<style>

.nav-links {
  all: unset;
}
</style>