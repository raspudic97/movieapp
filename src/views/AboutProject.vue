<template>
  <div class="aboutProject">
      <h1>Movie App</h1>

      <p class="about">
         Movie App je jednostavan projekt za pretraživanje filmova. Na početnoj stranici ćete svaki put kada uđete dobiti nasumično odabran film.
         Također na stranici možete dobiti listu popularnih i najbolje ocjenjenih filmova. Na stranici "search" moguće je i pretraživati filmove.
         Kada kliknete na karticu od filma otvorit će se detaljniji opis istog. Na stranici sa detaljnijim opisom imate mogućnost i za pronalaženje 
         filmova sličnih odabranom filmu (opcija - Find similar movies).

         Ukoliko želite na stranici "feedback" možete ostaviti i komentar koji će se spremiti u lokalnu bazu podataka.
      </p>

      <h1 class="upute">Šta je potrebno za pokretanje projekta ?</h1>

      <span>1. Dodavanje node_modules foldera</span>
      <p>Nakon skidanja projekta sa github-a potrebno je u terminalu upisati <strong>"npm install"</strong> da bi se instalirao node_modules folder</p>

      <span>2. Dodavanje axiosa</span>
      <p>Nakon instalacije node_modules, morate dodati axios tako što ćete u terminalu napisati <strong> "npm install --save axios vue-axios"</strong></p>

      <span>3. Instalacija json-servera</span>
      <p>Da bi feedback stranica bila funkcionalna potrebno je dodati json-server tako što ćete u terminalu napisati <strong>"npm install json-server -g"</strong></p>

      <span>4. Pokretanje projekta</span>
      <p>Da bi pokrenuli projekt potrebno je uraditi 2 stvari: <br><br>
           1. Pokrenuti json-server za lokalnu bazu podataka tako što u terminalu pišete <strong> "json-server db.json" </strong><br><br>

           2. Pokrenuti projekt tako što u terminalu pišete <strong> "npm run serve" </strong><br>
              - Ctrl + lijevi klik na link će otvoriti projekt u zadanom web browseru
      </p>
  </div>
</template>

<style scoped>

.aboutProject {
    padding: 2rem 4rem;
    max-width: 80vw;
    margin: 0 auto;
}

span {
    color: #333;
    margin: 1rem;
    font-weight: bold;
    font-size: 1rem;
    display: block;
    text-align: center;
}

p {
    text-align: center;
}

h1 {
    text-align: center;
    padding-bottom: 1rem;
}

.about {
    text-align: center;
    padding: 0;
}
</style>