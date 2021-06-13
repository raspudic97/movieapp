<template>
  <div class="home">
    <v-container class="backgroundFilter"></v-container>
    <v-container class="hero">
      <div class="movieInfo">
        <img :src="selectedMoviePoster" alt="" class="moviePoster" />

        <div class="movieDetails">
          <h1 class="movieTitle">{{ selectedMovieTitle }}</h1>
          <p class="movieDesc">{{ selectedMovieDesc }}</p>
          <p class="movieRating">Rating: {{ selectedMovieRating }}</p>

          <router-link
            class="buttonLink"
            :to="{ name: 'Similar', params: { movieId } }"
            ><v-btn class="detailsButton"
              >Find Similar Movies</v-btn
            ></router-link
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
        exampleProp: null
  },
  data() {
    return {
      selectedMovie: null,
      selectedMovieTitle: null,
      selectedMovieDesc: null,
      selectedMovieRating: null,
      movieId: null,
      selectedMoviePoster: null
    };
  },
  created() {
    this.axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.exampleProp}?api_key=2b24ba56d7cced960b52aa5d062f497e&language=en-US`
      )
      .then((response) => {
        this.selectedMovie = response.data

        this.selectedMoviePoster = `https://image.tmdb.org/t/p/original${this.selectedMovie.poster_path}`; // Poster Path
        this.selectedMovieTitle = this.selectedMovie.title; // Naziv
        this.selectedMovieDesc = this.selectedMovie.overview; // Kratki opis filma 
        this.selectedMovieRating = this.selectedMovie.vote_average; // Ocijena filma
        this.movieId = this.selectedMovie.id; // ID filma

        // Background slika za pocetnu stranicu
        const hero = document.querySelector(".hero");
        hero.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${this.selectedMovie.backdrop_path}")`;
      });
  },
};
</script>

<style scoped>
.backgroundFilter {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.hero {
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 91.5vh;
  min-width: 100vw;
}

.movieInfo {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start !important;
}

.movieDetails {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 40%;
  margin: 0 2rem;
}

.moviePoster {
  width: 300px;
  height: 450px;
  margin: 0 2rem;
  border-radius: 10px;
}

h1,
p {
  color: white;
}

.buttonLink {
  all: unset;
}
</style>
