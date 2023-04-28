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

async function popularityChosen() {
  document.getElementById('selectionDiv').addEventListener('submit', function (event) {
    event.preventDefault()
    switch (document.getElementById('selectPopularity').value) {
      case 'Most Popular':
        document.getElementById('resultDiv').innerHTML = 'Most Popular'
        console.log(dog)
        break
      case 'Least Popular':
        document.getElementById('resultDiv').innerHTML = 'Least Popular'
        break
      default:
        document.getElementById('resultDiv').innerHTML = 'Nothing'
        break
    }
  })
}

const dog = ref('')
async function getDog() {
  let res = await fetch(
    'https://data.cityofnewyork.us/resource/nu7n-tubp.json?$query=SELECT%0A%20%20%60animalname%60%2C%0A%20%20%60animalgender%60%2C%0A%20%20%60animalbirth%60%2C%0A%20%20%60breedname%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60licenseissueddate%60%2C%0A%20%20%60licenseexpireddate%60%2C%0A%20%20%60extract_year%60'
  )
  let data = await res.json()
  dog.value = data
}

onMounted(() => {
  getDog()
  popularityChosen()
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
