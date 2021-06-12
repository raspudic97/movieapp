<template>
  <div>
      <div class="container">
          <img :src="posterUrl" alt="">

          <p class="movieTitle">{{ title }}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ["title", "imgSrc"],
    data() {
        return {
            posterUrl: `https://image.tmdb.org/t/p/original${this.imgSrc}`,
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 350px;
    overflow: hidden;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.65);
    padding: 0;
}

img {
    width: 200px;
    height: 300px;
}

.movieTitle {
    text-align: center;
    color: white;
}
</style>