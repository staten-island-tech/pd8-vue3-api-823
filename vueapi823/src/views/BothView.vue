<template>
  <HeadingTemplate></HeadingTemplate>
  <form id="wrapperDiv">
    <div id="selectionDiv">
      <h2>Popularity Category</h2>
      <select class="selectPopular">
        <option id="nonePopular"></option>
        <option id="mPopular">Most Popular</option>
        <option id="lPopular">Least Popular</option>
      </select>
      <h2>Year Category</h2>
      <select class="selectYear">
        <option id="noneYear"></option>
        <option id="animalbirth">Year of Birth</option>
        <option id="licenseexpireddate">License Expired</option>
        <option id="extract_year">Extract Year</option>
      </select>
      <label>Year: <input type="form" /></label>
      <div>
        <button class="submit" type="button">Submit</button>
      </div>
    </div>

    <div id="resultDiv">result</div>
  </form>
</template>

<script setup>
const DOM = {
  typeYearSelect: document.querySelector('selectYear'),
  buttonSubmit: document.querySelector('submit')
}

function test() {
  let typeYear = DOM.typeYearSelect.value
  console.log(typeYear)
}

/* DOM.buttonSubmit.addEventListener('click', function () {
  test()
}) 
KM: This and what is above is what I have for now. The current idea is to get the value of what the user selected and go off of the idea of what I had suggested previously. All the work I have done up to this point is in this vue file. When this button is un-commented, the page breaks, and it says that the page cannot read event listener because it is null. I am unsure why this is, but I will change the function later to better suit the intention of the program (to get the classlist)
*/

import HeadingTemplate from './HeadingTemplate.vue'
import { ref, onMounted } from 'vue'
const dog = ref('')
async function getDog() {
  let res = await fetch(
    `https://data.cityofnewyork.us/resource/nu7n-tubp.json?${typeYear}=${inputYear}?$limit=10000`
  )
  let data = await res.json()
  dog.value = data
}

onMounted(() => {})
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
