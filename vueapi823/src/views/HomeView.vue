<template>
  <div class="container">
    <DogCard v-for="(animal, index) in dog" :key="animal.animalname" :id="index" :animal="animal" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataCard from '../components/DataCard.vue'

const test = ref('')
async function getData() {
  let res = await fetch(
    'https://data.cityofnewyork.us/resource/nu7n-tubp.json?$query=SELECT%0A%20%20%60animalname%60%2C%0A%20%20%60animalgender%60%2C%0A%20%20%60animalbirth%60%2C%0A%20%20%60breedname%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60licenseissueddate%60%2C%0A%20%20%60licenseexpireddate%60%2C%0A%20%20%60extract_year%60'
  )
  let data = await res.json()
  test.value = data
}
onMounted(() => {
  getData()
})
// https://pokeapi.com/api/v2/pokemon?limit=151&offset=0
// L3 5:00
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  width: 80vw;
}
</style>
