<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="wrapperDiv">
    <form id="selectionDiv">
      <h2>Popularity Category</h2>
      <select id="selectPopularity">
        <option></option>
        <option>Most Popular</option>
        <option>Least Popular</option>
      </select>
      <div>
        <button id="button" type="button" @click="test1">Submit</button>
      </div>
    </form>

    <div class="container" id="resultDiv"><Bar :data="chartData" /></div>
  </div>
</template>

<script setup>
import HeadingTemplate from './HeadingTemplate.vue'
import { ref, onMounted } from 'vue'
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
</script>

<script>
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#000000',
            data: [50, 25, 25]
          }
        ]
      }
    }
  },
  methods: {},
  mounted() {
    console.log(this.dog)
  },
  setup() {
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
      document.getElementById('button').addEventListener('click', function (event) {
        event.preventDefault()
        mapCreation('breedname')
        let array = Array.from(popularityMap, ([breedname, count]) => ({ breedname, count }))
        document.getElementById('resultDiv').innerHTML = ''
        switch (document.getElementById('selectPopularity').value) {
          case 'Most Popular':
            breedNames = []
            breedCount = []
            let mostPopular = array.sort(
              (firstBreed, secondBreed) => secondBreed.count - firstBreed.count
            )
            for (let i = 1; i < 6; i++) {
              console.log(mostPopular[i])
              breedCount.push(mostPopular[i].count)
              breedNames.push(mostPopular[i].breedname)
              console.log(breedNames)
            }
            break
          case 'Least Popular':
            breedNames = []
            breedCount = []
            let leastPopular = array.sort(
              (firstBreed, secondBreed) => firstBreed.count - secondBreed.count
            )
            for (let i = 0; i < 5; i++) {
              console.log(leastPopular[i])
              breedCount.push(leastPopular[i].count)
              breedNames.push(leastPopular[i].breedname)
              console.log('TEST1')
            }
            break
        }
      })
      test()
    }

    function test() {
      document.getElementById('selectionDiv').addEventListener('submit', function () {
        console.log(breedNames)
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
    return {
      dog
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
