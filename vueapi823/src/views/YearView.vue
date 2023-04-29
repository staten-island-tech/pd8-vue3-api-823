<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="wrapperDiv">
    <form id="selectionDiv">
      <h2>Year Category</h2>
      <select id="selectYear">
        <option></option>
        <option id="yearBirth">Year of Birth</option>
        <option id="licenseExpired">License Expired</option>
        <option id="extractYear">Extract Year</option>
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

async function organizeDataByYear() {
  document.getElementById('selectionDiv').addEventListener('submit', function (event) {
    event.preventDefault()
    switch (document.getElementById('selectYear').value) {
      case 'Year of Birth':
        const birthMap = new Map()
        for (let i = 0; i < dog._rawValue.length; i++) {
          if (birthMap.has(dog._rawValue[i].animalbirth)) {
            birthMap.set(
              `${dog._rawValue[i].animalbirth}`,
              `${Number(birthMap.get(dog._rawValue[i].animalbirth)) + 1}`
            )
          } else {
            birthMap.set(`${dog._rawValue[i].animalbirth}`, 1)
          }
        }
        console.log(birthMap)
        break
      case 'License Expired':
        const licenseMap = new Map()
        for (let i = 0; i < dog._rawValue.length; i++) {
          if (licenseMap.has(dog._rawValue[i].licenseexpireddate.slice(0, 4))) {
            licenseMap.set(
              `${dog._rawValue[i].licenseexpireddate.slice(0, 4)}`,
              `${Number(licenseMap.get(dog._rawValue[i].licenseexpireddate.slice(0, 4))) + 1}`
            )
          } else {
            licenseMap.set(`${dog._rawValue[i].licenseexpireddate.slice(0, 4)}`, 1)
          }
        }
        console.log(licenseMap)
        break
      case 'Extract Year':
        // const extractMap = new Map()
        // for (let i = 0; i < dog._rawValue.length; i++) {
        //   if (extractMap.has(dog._rawValue[i].extract_year)) {
        //     extractMap.set(
        //       `${dog._rawValue[i].extract_year}`,
        //       `${Number(extractMap.get(dog._rawValue[i].extract_year)) + 1}`
        //     )
        //   } else {
        //     extractMap.set(`${dog._rawValue[i].extract_year}`, 1)
        //   }
        // }
        // console.log(extractMap)
        break
    }
  })
}

const dog = ref('')
async function getDog() {
  let res = await fetch(
    `https://data.cityofnewyork.us/resource/nu7n-tubp.json?${typeYear}=${inputYear}`
  )
  let data = await res.json()
  dog.value = data
}

onMounted(() => {
  getDog()
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
