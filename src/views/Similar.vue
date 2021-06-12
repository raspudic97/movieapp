<template>
  <div class="similarMovies">
    <v-row class="mb-6" no-gutters dense>
      <v-col class="ma-4" cols="2" v-for="movie in movies" :key="movie.id">
        <MovieCard :title="movie.title" :imgSrc="movie.poster_path" />
      </v-col>
    </v-row>

    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                v-model="pageNumber"
                class="my-4"
                :length="totalPages"
                @change="getData"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';
export default {
  components: { MovieCard },
  props: ["randomMovieId"],
  data() {
    return {
      pageNumber: 1,
      totalPages: 10,
      movies: null,
    };
  },
  methods: {
    methodThatForcesUpdate() {
      console.log(this.pageNumber);
      this.$forceUpdate();
    },
    getData() {
      this.axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.randomMovieId}/similar?api_key=2b24ba56d7cced960b52aa5d062f497e&language=en-US&page=1`
      )
      .then((response) => {
        this.movies = response.data.results;
        this.totalPages = response.data.total_pages;
      });
  }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.similarMovies {
  width: 100vw;
  height: 100%;
}
</style>