<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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
// L2 1:50
</script>

<style scoped>
.flexContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  width: 80vw;
}
</style>
