<template>
  <router-link :to="dogPath" class="card">
    <h2>{{ animal.animalName }}</h2>
    <h3>{{ id }}</h3>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ animal: Object, id: Number })
const dogPath = computed(() => {
  return `/dogData/${props.animal.animalName}`
})
//L3:04
</script>

<style scoped>
.card {
  width: 28%;
  height: 500px;
  background-color: blue;
  color: white;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
</style>
