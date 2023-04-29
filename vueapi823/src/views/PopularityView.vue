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

async function organizeDataByPopularity() {
  document.getElementById('selectionDiv').addEventListener('submit', function (event) {
    event.preventDefault() // Stops from refreshing page
    const popularityMap = new Map() // Create a new map (Not needed)
    for (let i = 0; i < dog._rawValue.length; i++) {
      // Iterate through the entire API
      if (popularityMap.has(dog._rawValue[i].breedname)) {
        // Checks if the dog exists in the map
        popularityMap.set(
          `${dog._rawValue[i].breedname}`,
          `${Number(popularityMap.get(dog._rawValue[i].breedname)) + 1}`
        ) // If it does, increase the dogs count by 1
      } else {
        popularityMap.set(`${dog._rawValue[i].breedname}`, 1) // If it does not exist, add the key-value pair to the map
      }
    }
    let array = Array.from(popularityMap, ([breedname, count]) => ({ breedname, count })) // Convert to an array (I partially understand how this one works, stole this one from the Stack Overflow.
    switch (
      document.getElementById('selectPopularity').value // Alternative to if/else statement with less typing and words all over the screen
    ) {
      case 'Most Popular': // When "Most Popular" is selected
        document.getElementById('resultDiv').innerHTML = '' // Clear the div
        let mostPopular = array.sort(
          (firstBreed, secondBreed) => secondBreed.count - firstBreed.count
        ) // Sort by most popular
        for (let i = 0; i < 5; i++) {
          // Filters out the top 5 dogs
          const node = document.createElement('p') // Useless stuff that I just copy and pasted for no reason
          const textnode = document.createTextNode(`${mostPopular[i].breedname}`)
          node.appendChild(textnode)
          document.getElementById('resultDiv').appendChild(node)
        }
        break
      case 'Least Popular': // When "Least Popular" is selected
        document.getElementById('resultDiv').innerHTML = '' // Clear the div
        let leastPopular = array.sort(
          (firstBreed, secondBreed) => firstBreed.count - secondBreed.count
        ) // Sort by least popular
        for (let i = 0; i < 5; i++) {
          // Filters out the bottom 5 dogs
          const node = document.createElement('p') // Useless stuff that I just copy and pasted for no reason
          const textnode = document.createTextNode(`${leastPopular[i].breedname}`)
          node.appendChild(textnode)
          document.getElementById('resultDiv').appendChild(node)
        }
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
