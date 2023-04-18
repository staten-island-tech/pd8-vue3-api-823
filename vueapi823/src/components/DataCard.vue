<template>
  <div class="card">
    <h2>{{ test.animalname }}</h2>
    <h2>{{ id }}</h2>
  </div>
</template>

<script>
const props = {
  data: Object,
  id: Number
}
</script>

<style lang="scss" scoped></style>
