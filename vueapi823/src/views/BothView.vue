<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="wrapperDiv">
    <form id="selectionDiv">
      <h2>Popularity Category</h2>
      <select id="selectPopular">
        <option id="nonePopular"></option>
        <option id="mPopular">Most Popular</option>
        <option id="lPopular">Least Popular</option>
      </select>
      <h2>Year Category</h2>
      <select id="selectYear">
        <option id="noneYear"></option>
        <option id="animalbirth">animalbirth</option>
      </select>
      <label>Year:</label>
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

// const comboMap = new Map()
// const nestedMap = new Map()
// function mapCreation(year) {
//   comboMap.clear()
//   nestedMap.clear()
//   for (let i = 0; i < dog._rawValue.length; i++) {
//     let keyName = dog._rawValue[i][year] //Year
//     let keyValue = comboMap.get(keyName) //Check if undefined
//     let nestedKeyName = dog._rawValue[i].breedname //Breed
//     let nestedKeyValue = nestedMap.get(nestedKeyName) //Count
//     if (keyValue) {
//       // If it is not undefined
//       if (keyName.nestedKeyName) {
//         nestedKeyValue++
//       } else {
//         nestedKeyValue = 1
//       }
//     } else {
//       // If it is undefined
//       nestedKeyValue = 1
//     }
//     nestedMap.set(nestedKeyName, nestedKeyValue)
//     comboMap.set(keyName, nestedMap)
//   }
//   console.log(nestedMap)
// }

const comboMap = new Map()
function mapCreation(fieldName) {
  comboMap.clear()
  for (let i = 0; i < dog._rawValue.length; i++) {
    let keyName = dog._rawValue[i][fieldName] // Year
    let breedMap = comboMap.get(keyName) // Year Value
    let breedname = dog._rawValue[i].breedname // Breed
    if (comboMap.has(keyName)) {
      let breedValue = breedMap.get(breedname)
      if (breedMap.has(breedname)) {
        breedValue.count += 1
      } else {
        breedValue = { breed: breedname, count: 1 }
        breedMap.set(breedname, breedValue)
      }
    } else {
      breedMap = new Map()
      let breedValue = { breed: breedname, count: 1 }
      breedMap.set(breedname, breedValue)
      comboMap.set(keyName, breedMap)
    }
  }
}

function organizeData() {
  document.getElementById('selectionDiv').addEventListener('submit', function (event) {
    event.preventDefault()
    mapCreation('animalbirth', 'breedname')
    console.log(comboMap)
  })
}

const dog = ref('')
async function getDog() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/nu7n-tubp.json?$limit=10000`)
  let data = await res.json()
  dog.value = data
}

//This is what I have for now for the filtering through the link code. For now, I have got it so that it filters the year (year.value). After this, I am going to try to get typeYear to work. The code above is relatively self-explanatory- it's an api call with an async function as well as getting input from a form and a click function. Later, this will have to be turned into an if-else function incase the user does not fill out one of the required fields, but that is for later. all the blocked code below was during testing- I am leaving it so that it commits to github, but I'll delete it upon the next time I work on the project.

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
