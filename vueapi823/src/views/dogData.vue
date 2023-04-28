<template>
  <div>
    <h1>{{ animal.animalname }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animal: {}
    }
  },
  mounted: async function () {
    await this.getDog()
  },
  methods: {
    getDog: async function () {
      let res = await fetch(
        `https://data.cityofnewyork.us/resource/nu7n-tubp.json?$query=SELECTanimalname,WHERE(keyIN ("value"))`
      )
      let data = await res.json()
      console.log(data)
      this.animal = data
    }
  },
  mounted() {
    this.getDog()
  }
}
</script>

<style scoped></style>
