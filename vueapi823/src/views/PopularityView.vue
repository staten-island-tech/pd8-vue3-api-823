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
        <button type="submit">Submit</button>
      </div>
    </form>

    <div id="resultDiv"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeadingTemplate from './HeadingTemplate.vue'

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
  document.getElementById('selectionDiv').addEventListener('submit', function (event) {
    event.preventDefault()
    mapCreation('breedname')

    let array = Array.from(popularityMap, ([breedname, count]) => ({ breedname, count }))
    document.getElementById('resultDiv').innerHTML = ''
    switch (document.getElementById('selectPopularity').value) {
      case 'Most Popular':
        let mostPopular = array.sort(
          (firstBreed, secondBreed) => secondBreed.count - firstBreed.count
        )
        for (let i = 0; i < 5; i++) {
          console.log(mostPopular[i])
        }
        break
      case 'Least Popular':
        let leastPopular = array.sort(
          (firstBreed, secondBreed) => firstBreed.count - secondBreed.count
        )
        for (let i = 0; i < 5; i++) {
          console.log(leastPopular[i])
        }
        break
    }
  })
}

const dog = ref('')
async function getDogFromAPI() {
  let res = await fetch(
    'https://data.cityofnewyork.us/resource/nu7n-tubp.json?$query=SELECT%0A%20%20%60animalname%60%2C%0A%20%20%60animalgender%60%2C%0A%20%20%60animalbirth%60%2C%0A%20%20%60breedname%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60licenseissueddate%60%2C%0A%20%20%60licenseexpireddate%60%2C%0A%20%20%60extract_year%60'
  )
  let data = await res.json()
  dog.value = data
}

onMounted(() => {
  getDogFromAPI()
  organizeDataByPopularity()
})
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
</style>
