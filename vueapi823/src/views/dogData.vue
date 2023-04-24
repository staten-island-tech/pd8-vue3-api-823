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
        'https://data.cityofnewyork.us/resource/nu7n-tubp.json?$query=SELECT%0A%20%20%60animalname%60%2C%0A%20%20%60animalgender%60%2C%0A%20%20%60animalbirth%60%2C%0A%20%20%60breedname%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60licenseissueddate%60%2C%0A%20%20%60licenseexpireddate%60%2C%0A%20%20%60extract_year%60'
      )
      let data = await res.json()
      this.animal = data
    }
  }
}
</script>

<style scoped></style>
