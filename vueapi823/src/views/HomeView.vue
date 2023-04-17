<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const test = ref('')
async function getData() {
  let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  let data = await res.json()
  pokemon.values = data.results
}
//L1 6:51
</script>

<style scoped></style>
