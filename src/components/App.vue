<template>
  <main id="app">
    <div class="content">
      <h1>Welcome to the random Domino's pizza generator!</h1>
    </div>

    <Options></Options>

    <Zip></Zip>

    <Restaurants></Restaurants>

    <Order></Order>

  </main>
</template>

<script>
import Zip from './Zip.vue'
import Restaurants from './Restaurants.vue'
import Options from './Options.vue'
import Order from './Order.vue'

export default {
  name: 'app',
  components: {
    Zip,
    Restaurants,
    Options,
    Order
  }
}
</script>

<style lang="sass">
  @import '~bulma/bulma.sass'
</style>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  width:80%;
}
</style>
