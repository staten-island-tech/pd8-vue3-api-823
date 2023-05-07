<template>
  <div id="wrapperDiv">
    <form id="selectionDiv">
      <h2>Popularity Category</h2>
      <select id="selectPopular" required>
        <option id="nonePopular"></option>
        <option id="mPopular">Most Popular</option>
        <option id="lPopular">Least Popular</option>
      </select>
      <h2>Year Category</h2>
      <label>Year:</label>
      <select id="selectYear" required>
        <option id="noneYear"></option>
        <option id="animalbirth">Birth Year</option>
        <option id="extractyear">License Expiration Date</option>
      </select>
      <div>
        <button class="button" id="submit" type="submit">Submit</button>
      </div>
    </form>

    <div id="resultDiv">result</div>
  </div>
</template>

<script setup>
import HeadingTemplate from './HeadingTemplate.vue'
import { ref, onMounted } from 'vue'

const comboMap = new Map()
function mapCreation(fieldName, indexStart, indexEnd) {
  comboMap.clear()
  for (let i = 0; i < dog._rawValue.length; i++) {
    let year = dog._rawValue[i][fieldName].slice(indexStart, indexEnd)
    let breedMap = comboMap.get(year)
    let breedName = dog._rawValue[i].breedname
    if (comboMap.has(year)) {
      let breedValue = breedMap.get(breedName)
      if (breedMap.has(breedName)) {
        breedValue++
      } else {
        breedValue = 1
      }
      breedMap.set(breedName, breedValue)
    } else {
      breedMap = new Map()
      breedMap.set(breedName, 1)
      comboMap.set(year, breedMap)
    }
  }
  console.log(fieldName)
}

function descendingOrder() {
  comboMap.forEach(function (valueMap, key, map) {
    let array = Array.from(valueMap, ([breedname, count]) => ({ breedname, count }))
    let sorted = array.sort((a, b) => b.count - a.count)
    map.set(key, sorted)
  })
}

function ascendingOrder() {
  comboMap.forEach(function (valueMap, key, map) {
    let array = Array.from(valueMap, ([breedname, count]) => ({ breedname, count }))
    let sorted = array.sort((a, b) => a.count - b.count)
    map.set(key, sorted)
  })
}

function organizeData() {
  document.getElementById('selectionDiv').addEventListener('submit', function (event) {
    event.preventDefault()
    switch (document.getElementById('selectYear').value) {
      case 'Birth Year':
        mapCreation('animalbirth')
        switch (document.getElementById('selectPopular').value) {
          case 'Most Popular':
            descendingOrder()
            console.log(comboMap)
            break
          case 'Least Popular':
            ascendingOrder()
            console.log(comboMap)
            break
        }
        break
      case 'License Expiration Date':
        mapCreation('licenseexpireddate', 0, 4)
        switch (document.getElementById('selectPopular').value) {
          case 'Most Popular':
            descendingOrder()
            console.log(comboMap)
            break
          case 'Least Popular':
            ascendingOrder()
            console.log(comboMap)
            break
        }
        break
    }
  })
}

const dog = ref('')
async function getDog() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/nu7n-tubp.json?$limit=10000`)
  let data = await res.json()
  dog.value = data
}

onMounted(() => {
  getDog()
  organizeData()
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

html,
body,
* {
  background-color: white;
  color: black;
}
</style>
