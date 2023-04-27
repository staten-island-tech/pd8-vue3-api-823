<template>
  <div id="headingDiv">
    <router-link to="HomeView">Home</router-link>
    <router-link to="PopularityView">Popularity</router-link>
    <router-link to="YearView">Year</router-link>
    <router-link to="BothView">Both</router-link>
  </div>
  <div id="wrapperDiv">
    <div id="selectionDiv">
      <h2>Popularity Category</h2>
      <select>
        <option></option>
        <option>Most Popular</option>
        <option>Least Popular</option>
      </select>
    </div>
    <div id="resultDiv">result</div>
  </div>
</template>

<script>
export default {}
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

#informationDiv {
  text-align: center;
  border: solid black;
  padding: 2rem 0rem;
  width: 50%;
  margin-top: 20rem;
  margin-left: auto;
  margin-right: auto;
}

#wrapperDiv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

#selectionDiv {
  width: 40%;
  border: solid black;
}

#resultDiv {
  width: 60%;
  border: solid black;
}
</style>
