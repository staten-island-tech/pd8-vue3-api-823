<template>
  <div id="headingDiv">
    <router-link to="/">Home</router-link>
    <router-link to="PopularityView">Popularity</router-link>
  </div>
</template>

<script>
export default {
  name: 'HeadingTemplate'
}
</script>

<style scoped>
#headingDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 2rem 0rem;
  border: solid black;
  font-size: 2rem;
}
</style>
