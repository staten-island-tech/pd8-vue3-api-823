<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="informationDiv">Info Here</div>
  <!-- <div class="container">
    <DogCard v-for="(animal, index) in dog" :key="animal.animalname" :id="index" :animal="animal" />
  </div> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeadingTemplate from './HeadingTemplate.vue'
// import DogCard from '../components/DogCard.vue'

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

html,
body,
* {
  background-color: white;
  color: black;
}

/* .container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
} */
</style>
