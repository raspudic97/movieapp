<template>
  <div class="similarMovies" fill-width>
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
    <h1 class="noMoviesMessage" v-if="numberOfMovies == 0">
      Sorry. We could not find any similar movies :(
    </h1>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
export default {
  components: { MovieCard },
  props: ["randomMovieId"],
  data() {
    return {
      numberOfMovies: null,
      movies: null,
    };
  },
  created() {
    this.axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.randomMovieId}/similar?api_key=2b24ba56d7cced960b52aa5d062f497e&page=1`
      )
      .then((response) => {
        this.movies = response.data.results;
        this.numberOfMovies = response.data.results.length;
      });
  },
};
</script>

<style scoped>
.similarMovies {
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.noMoviesMessage {
  text-align: center;
  margin: 3rem 0;
  color: rgba(0, 0, 0, 0.7);
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