<template>
  <HeadingTemplate></HeadingTemplate>
  <div id="wrapperDiv">
    <div id="selectionDiv">
      <h2>Year Category</h2>
      <select>
        <option></option>
        <option>Year of Birth</option>
        <option>License Expired</option>
        <option>Extract Year</option>
      </select>
    </div>
    <div id="resultDiv">result</div>
  </div>
</template>

<script>
import HeadingTemplate from './HeadingTemplate.vue'
export default { components: { HeadingTemplate } }
</script>

<style scoped>
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
