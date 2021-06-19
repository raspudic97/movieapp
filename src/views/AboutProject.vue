<template>
  <div class="aboutProject">
    <div class="backgroundFilter"></div>
    <h1>Movie App</h1>

    <p class="about">
      Movie App je jednostavna web stranica za pretraživanje filmova. Na
      početnoj stranici ćete svaki put kada uđete dobiti nasumično odabran film.
      Također na Movie App-u možete dobiti listu popularnih i najbolje
      ocjenjenih filmova. Na stranici "search" moguće je i pretraživati filmove
      po naslovi. Kada kliknete na karticu od filma otvorit će se detaljniji
      opis istog, a na stranici sa detaljnijim opisom imate mogućnost i za
      pronalaženje filmova sličnih odabranom filmu (opcija - Find similar
      movies).
    </p>
  </div>
</template>

<style scoped>
.backgroundFilter {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}

.aboutProject {
  padding: 2rem 4rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  color: white;
  background: url("https://wallpaperaccess.com/full/752715.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

span {
  color: #333;
  margin: 1rem;
  font-weight: bold;
  font-size: 1rem;
  display: block;
  text-align: center;
}

h1 {
  text-align: center;
  padding-bottom: 1rem;
}

h1,
p {
  z-index: 2;
}

.about {
  text-align: center;
  padding: 0;
}
</style>