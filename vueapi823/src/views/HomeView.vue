<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="informationDiv"><Bar :data="chartData" /></div>
  <!-- <div class="container">
    <DogCard v-for="(animal, index) in dog" :key="animal.animalname" :id="index" :animal="animal" />
  </div> -->
</template>

<script setup>
import HeadingTemplate from './HeadingTemplate.vue'
</script>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Popularity',
            backgroundColor: '#000000',
            data: [20, 50, 20]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
#informationDiv {
  text-align: center;
  border: solid black;
  padding: 2rem 0rem;
  width: 50%;
  margin-top: 20rem;
  margin-left: auto;
  margin-right: auto;
}

html,
body,
* {
  background-color: white;
  color: black;
}

/* .container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
} */
</style>
