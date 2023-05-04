<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="wrapperDiv">
    <form id="selectionDiv">
      <h2>Popularity Category</h2>
      <select id="selectPopularity" required>
        <option></option>
        <option>Most Popular</option>
        <option>Least Popular</option>
      </select>
      <div>
        <button id="button" type="button">Submit</button>
      </div>
    </form>

    <div class="container" id="resultDiv">
      <Doughnut id="Chart" :data="chartData" #default> </Doughnut>
    </div>
  </div>
</template>

<script setup>
import HeadingTemplate from './HeadingTemplate.vue'
import { ref, onMounted } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement
)

const chartData = {
  labels: [],
  datasets: [
    {
      /*       active: false, */
      label: 'Popularity of Dogs in Vue',
      backgroundColor: [
        'rgb(31, 54, 61)',
        'rgb(64, 121, 140)',
        'rgb(112, 169, 161)',
        'rgb(158, 193, 163)',
        'rgb(207, 224, 195)'
      ],
      data: []
    }
  ]
}

let breedNames = []
let breedCount = []

const popularityMap = new Map()
function mapCreation(fieldName) {
  popularityMap.clear()
  for (let i = 0; i < dog._rawValue.length; i++) {
    let keyName = dog._rawValue[i][fieldName]
    let keyValue = popularityMap.get(keyName)
    if (keyValue > 0) {
      keyValue++
    } else {
      keyValue = 1
    }
    popularityMap.set(keyName, keyValue)
  }
}

function organizeDataByPopularity() {
  document.getElementById('button').addEventListener('click', function () {
    mapCreation('breedname')

    chartData.datasets[0].data.length = 0
    chartData.labels.length = 0

    let array = Array.from(popularityMap, ([breedname, count]) => ({ breedname, count }))
    document.getElementById('resultDiv').innerHTML = ''
    switch (document.getElementById('selectPopularity').value) {
      case 'Most Popular':
        /*         breedNames = []
        breedCount = [] */

        let mostPopular = array.sort(
          (firstBreed, secondBreed) => secondBreed.count - firstBreed.count
        )
        for (let i = 1; i < 6; i++) {
          console.log(mostPopular[i])
          /*           breedCount.push(mostPopular[i].count)
          breedNames.push(mostPopular[i].breedname) */

          chartData.datasets[0].data.push(mostPopular[i].count)
          chartData.labels.push(mostPopular[i].breedname)
          console.log(breedNames)
        }
        break
      case 'Least Popular':
        /*         breedNames = []
        breedCount = [] */
        let leastPopular = array.sort(
          (firstBreed, secondBreed) => firstBreed.count - secondBreed.count
        )
        for (let i = 0; i < 5; i++) {
          console.log(leastPopular[i])
          /*           breedCount.push(leastPopular[i].count)
          breedNames.push(leastPopular[i].breedname) */
          chartData.datasets[0].data.push(leastPopular[i].count)
          chartData.labels.push(leastPopular[i].breedname)
        }
        this.active = true
        break
    }
  })
}

const dog = ref('')
async function getDogFromAPI() {
  let res = await fetch('https://data.cityofnewyork.us/resource/nu7n-tubp.json?$limit=10000')
  let data = await res.json()
  dog.value = data
}

onMounted(() => {
  getDogFromAPI()
  organizeDataByPopularity()
})
</script>

<script></script>

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
