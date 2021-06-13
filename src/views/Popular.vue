<template>
  <div class="popularMovies" fill-width>
    <h1 class="pageTitle">Popular movies</h1>

    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                v-model="currPage"
                class="my-4"
                :length="totalPages"
                @input="getData"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
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
      currPage: 1,
      totalPages: 10,
    };
  },
  methods: {
    getData() {
      this.axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=2b24ba56d7cced960b52aa5d062f497e&page=${this.currPage}`
        )
        .then((response) => {
          this.movies = response.data.results;
          this.totalPages = response.data.total_pages;
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.popularMovies {
  width: 100vw;
  height: 100%;
  margin: 0 auto;
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