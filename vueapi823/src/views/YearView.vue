<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="wrapperDiv">
    <form id="selectionDiv">
      <h2>Year Category</h2>
      <select id="selectYear">
        <option></option>
        <option>Year of Birth</option>
        <option>License Expired</option>
        <option>Extract Year</option>
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
      case 'Extract Year':
        mapCreation('extract_year')
        console.log(yearMap)
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
