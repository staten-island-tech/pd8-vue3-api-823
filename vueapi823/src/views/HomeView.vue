<template>
  <div class="container">
    <PokemonCard
      v-for="(monster, index) in test"
      :key="monster.name"
      :id="index + 1"
      :pokemon="monster"
    ></PokemonCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import dogData from '../components/icons/dogData.Vue'
const test = ref('')
async function getData() {
  let res = await fetch(
    'https://data.cityofnewyork.us/resource/nu7n-tubp.json?$query=SELECT%0A%20%20%60animalname%60%2C%0A%20%20%60animalgender%60%2C%0A%20%20%60animalbirth%60%2C%0A%20%20%60breedname%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60licenseissueddate%60%2C%0A%20%20%60licenseexpireddate%60%2C%0A%20%20%60extract_year%60'
  )
  let data = await res.json()
  test.value = data.results
}
onMounted(() => {
  getData()
})
//L2 3:34
</script>

<style scoped></style>
