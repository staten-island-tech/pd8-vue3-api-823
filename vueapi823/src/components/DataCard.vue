<template>
  <router-link :to="dataPath" class="card">
    <h2>{{ animal.animalname }}</h2>
    <h2>{{ id }}</h2>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  animal: Object,
  id: Number
})
const dataPath = computed(() => {
  return `/AnimalData/${props.animal.animalname}`
})
</script>

<style scoped>
.card {
  width: 28%;
  height: 500px;
  background-color: aliceblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
</style>
