<template>
  <div id="wrapperDiv">
    <form id="selectionDiv">
      <h2>Year Category</h2>
      <select id="selectYear" required>
        <option></option>
        <option id="yearBirth">Year of Birth</option>
        <option id="licenseExpired">License Expired</option>
      </select>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>

    <div id="resultDiv">result</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeadingTemplate from './HeadingTemplate.vue'

const yearMap = new Map()
function mapCreation(fieldName, indexStart, indexEnd) {
  yearMap.clear()
  for (let i = 0; i < dog._rawValue.length; i++) {
    let keyName = dog._rawValue[i][fieldName].slice(indexStart, indexEnd)
    let keyValue = yearMap.get(keyName)
    if (keyValue > 0) {
      keyValue++
    } else {
      keyValue = 1
    }
    yearMap.set(keyName, keyValue)
  }
}

function organizeDataByYear() {
  document.getElementById('selectionDiv').addEventListener('submit', function (event) {
    event.preventDefault()
    switch (document.getElementById('selectYear').value) {
      case 'Year of Birth':
        mapCreation('animalbirth')
        console.log(yearMap)
        break
      case 'License Expired':
        mapCreation('licenseexpireddate', 0, 4)
        console.log(yearMap)
        break
    }
  })
}

const dog = ref('')
async function getDogFromAPI() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/nu7n-tubp.json?$limit=10000`)
  let data = await res.json()
  dog.value = data
}

onMounted(() => {
  getDogFromAPI()
  organizeDataByYear()
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
html,
body,
* {
  background-color: white;
  color: black;
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
