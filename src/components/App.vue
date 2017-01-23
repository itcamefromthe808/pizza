<template>
  <main id="app">
    <h1>Welcome to the random Domino's pizza generator!</h1>

    <Zip></Zip>

    <Restaurants></Restaurants>

    <Options></Options>

    <Pizza></Pizza>

  </main>
</template>

<script>
import Zip from './Zip.vue'
import Restaurants from './Restaurants.vue'
import Options from './Options.vue'
import Pizza from './Pizza.vue'

export default {
  name: 'app',
  components: {
    Zip,
    Restaurants,
    Options,
    Pizza
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
