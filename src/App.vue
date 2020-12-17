<template>
  <div id="app">
    <!-- Container Members -->
      <div class="container-fluid p-3 my-3 " id="members">
        <div class="container-fluid text-center bg-dark text-light">
              <h2 class="section-heading text-uppercase">Equipo</h2>
          </div>
        <div class="row justify-content-center mb-5">
          <div class="col mt-5" v-for="(miembro, index) of Team" :key="index"> 
            <team-card :member="miembro"> </team-card>
          </div> 
        </div>
     </div>
  </div>
</template>

<script>
import TeamCard from './components/TeamCard.vue'
export default {
  name: 'App',
  components: {
    TeamCard,
  },
  data(){
    return{
    Team:[
        {
          codigo: 1,
          nombre:'Angie Forero Vargas ',
          descripcion:'Estudiante de ingeniería de producción de la Universidad Distrital, altamente capacitada para capturar Pokémon legendarios y derrotar al equipo rocket.', 
          rol: 'Analista de Software',
          image: 'https://i.imgur.com/Keei60a.png'
        },
        {
          codigo: 2,
          nombre:"David Alejandro Vargas",
          descripcion:'Tengo 23 años y soy estudiante de Ing. Electrónica en la UNAD, gamer de closet, entrenador Pokemon, Motero y futuramente desarrollador de software, me desempeño desde hace 4 años como electronico automotriz en Chevrolet en la ciudad de Palmira - Valle del cauca.',
          rol: 'Desarrollador backend',
          image: 'https://i.imgur.com/ZCHR6Vl.png'
        },
        {
          codigo: 3,
          nombre:'Sandra Liliana Jaimes',
          descripcion:'47 años Ingeniera Electrónica y gamer en proceso, Maestría Gerencia Tecnología Educativa y Docente del ITIS en Socorro Santander desde hace 15 años',
          rol: 'Tester',
          image: 'https://i.imgur.com/mZQrx3H.png'
        },
        {
            codigo: 4,
            nombre:'Jesus Gonzalez Pulido',
            descripcion:'Tecnólogo en telecomunicaciones, aficionado a los video juegos como lo son World of Tanks BLITZ, TACTICOOL. Con fuerte convicción de convertirme en desarrollador de software y especialista IT, experiencia de 12 años en telecomunicaciones y fines.',
            rol: 'Desarrollador Backend',
            image: 'https://i.imgur.com/ZTZqulh.png'
        },
        {
          codigo: 5,
          nombre:'Yeison Andres',
          descripcion:'Estudiante de Ingeniería de Sistemas de la Universidad Católica de Colombia, Gamer, otaku, me gusta dibujar y cualquier duda en las áreas antes mencionadas les será aclarada 7u7',
          rol: 'Arquitecto Software',
          image: 'https://i.imgur.com/3a1zFKa.png'
        },
      ]
    }
  }
}
</script>