<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="wrapperDiv">
    <h2>Popularity Category</h2>
    <select id="selectPopularity">
      <option></option>
      <option>Most Popular</option>
      <option>Least Popular</option>
    </select>

    <div></div>
    <div class="container" id="resultDiv"><Bar :data="chartData" /></div>
  </div>
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
        labels: [],
        datasets: [[{ data: [] }]]
      },
      chartStyle: {}
    }
  },
  mounted() {
    this.getDog()
  },

  methods: {
    getDog: async function () {
      let res = await fetch('https://data.cityofnewyork.us/resource/nu7n-tubp.json?$limit=10000')
      let data = await res.json()
      console.log('data1')
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

#wrapperDiv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

#selectionDiv {
  width: 40%;
  border: solid black;
}

#resultDiv {
  width: 60%;
  border: solid black;
}

html,
body,
* {
  background-color: white;
  color: black;
}
</style>
