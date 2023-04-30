<template>
  <HeadingTemplate></HeadingTemplate>
  <form id="wrapperDiv">
    <div id="selectionDiv">
      <h2>Popularity Category</h2>
      <select class="selectPopular">
        <option id="nonePopular"></option>
        <option id="mPopular">Most Popular</option>
        <option id="lPopular">Least Popular</option>
      </select>
      <h2>Year Category</h2>
      <select id="selectYear">
        <option id="noneYear"></option>
        <option id="animalbirth">Year of Birth</option>
        <option id="licenseexpireddate">License Expired</option>
        <option id="licenseissueddate">License Issued</option>
      </select>
      <label>Year: <input type="form" id="formYear" /></label>
      <div>
        <button class="button" id="submit" type="button">Submit</button>
      </div>
    </div>

    <div id="resultDiv">result</div>
  </form>
</template>

<script setup>
import HeadingTemplate from './HeadingTemplate.vue'
import { ref, onMounted } from 'vue'

function getLink() {
  document.getElementById('submit').addEventListener('click', function () {
    let year = document.querySelector('#formYear')
    console.log(year.value)
    let typeYear = ''
    console.log(document.querySelector('#selectYear').value)
    /*     if ((document.querySelector('#selectYear').value = 'Year of Birth')) {
      typeYear = 'animalbirth'
      console.log(typeYear)
    } else if ((document.querySelector('#selectYear').value = 'License Expired')) {
      typeYear = 'licenseexpireddate'
      console.log(typeYear)
    } else if ((document.querySelector('#selectYear').value = 'License Issued')) {
      typeYear = 'licenseissueddate'
      console.log(typeYear)
    } else {
      typeYear = ''
    } */

    const dog = ref('')
    async function getDog() {
      let res = await fetch(
        /* `https://data.cityofnewyork.us/resource/nu7n-tubp.json?${typeYear}=${inputYear}?$limit=10000` */
        `https://data.cityofnewyork.us/resource/nu7n-tubp.json?${typeYear}=${year.value}?$limit=10000`
      )
      let data = await res.json()
      dog.value = data
      console.log(dog.value)
    }
    getDog()
  })
} //This is what I have for now for the filtering through the link code. For now, I have got it so that it filters the year (year.value). After this, I am going to try to get typeYear to work. The code above is relatively self-explanatory- it's an api call with an async function as well as getting input from a form and a click function. Later, this will have to be turned into an if-else function incase the user does not fill out one of the required fields, but that is for later. all the blocked code below was during testing- I am leaving it so that it commits to github, but I'll delete it upon the next time I work on the project.

onMounted(() => {
  getLink()
})
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

html,
body,
* {
  background-color: white;
  color: black;
}
</style>
