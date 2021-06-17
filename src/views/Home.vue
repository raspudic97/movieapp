<template>
  <div class="home">
    <v-container class="backgroundFilter"></v-container>
    <v-container class="hero">
      <div class="movieInfo">
        <img :src="randomMoviePoster" alt="" class="moviePoster" />

        <div class="movieDetails">
          <h1 class="movieTitle">{{ randomMovieTitle }}</h1>
          <p class="movieDesc">{{ randomMovieDesc }}</p>
          <p class="movieRating">Rating: {{ randomMovieRating }}</p>

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
  data() {
    return {
      randomMovie: null,
      randomMoviePoster: null,
      randomMovieTitle: null,
      randomMovieDesc: null,
      randomMovieRating: null,
      movieId: null,
      randomPage: null,
    };
  },
  created() {
    // Random page
    this.randomPage = Math.floor(Math.random() * 5);

    if (this.randomPage == 0) {
      this.randomPage = 1;
    }

    //Random movie i povlacenje podataka sa API-a
    this.axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2b24ba56d7cced960b52aa5d062f497e&language=en-US&page=${this.randomPage}`
      )
      .then((response) => {
        const randomNumber = Math.floor(
          Math.random() * response.data.results.length
        ); // Random broj

        this.randomMovie = response.data.results[randomNumber]; // Generira film nasumično
        this.randomMoviePoster = `https://image.tmdb.org/t/p/original${this.randomMovie.poster_path}`; // Poster Path za random film
        this.randomMovieTitle = this.randomMovie.title; // Naziv random filma
        this.randomMovieDesc = this.randomMovie.overview; // Kratki opis filma
        this.randomMovieRating = this.randomMovie.vote_average; // Ocijena filma
        this.movieId = this.randomMovie.id; // ID filma

        // Background slika za pocetnu stranicu
        const hero = document.querySelector(".hero");
        hero.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${this.randomMovie.backdrop_path}")`;
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

@media only screen and (max-width: 800px) {
  .movieInfo {
    flex-direction: column;
    margin: 2rem 0;
  }

  .movieDetails {
    margin: 2rem 0;
    align-items: center;
  }

  .hero {
    height: auto;
    overflow: visible;
  }

  h1,
  p {
    text-align: center;
  }
}
</style>
