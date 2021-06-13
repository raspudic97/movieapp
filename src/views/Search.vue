<template>
  <div class="search" fill-width>
    <div class="searchContainer">
      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
          placeholder="Search..."
          v-model="searchValue"
        ></v-text-field>
      </v-responsive>

      <v-btn @click="getData">Search</v-btn>
    </div>

    <v-row no-gutters dense>
      <v-col class="my-4" cols="2" v-for="movie in movies" :key="movie.id">
        <router-link
          class="cardLink"
          :to="{ name: 'Details', params: { exampleProp: movie.id } }"
        >
          <MovieCard
            class="card"
            :title="movie.title"
            :imgSrc="movie.poster_path"
          />
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
export default {
  components: { MovieCard },
  data() {
    return {
      movies: null,
      searchValue: null,
    };
  },
  methods: {
    getData() {
      this.axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=2b24ba56d7cced960b52aa5d062f497e&language=en-US&query=${this.searchValue}`
        )
        .then((response) => {
          this.movies = response.data.results;
          this.totalPages = response.data.total_pages;
        });
    },
  },
};
</script>

<style scoped>
.search {
  width: 100vw;
  height: 100%;
  margin: 0 auto;
}

.searchContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    margin: 2rem auto;
}
.card {
  cursor: pointer;
  transition: 0.5s ease;
}

.card:hover {
  opacity: 0.7;
  transition: 0.5s ease;
}

.cardLink {
  all: unset;
}
</style>