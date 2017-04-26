<template>
  <main id="app">

    <Hero></Hero>

    <Options></Options>

    <Store></Store>

    <Order></Order>

  </main>
</template>

<script>
import Hero from './Hero.vue'
import Options from './Options.vue'
import Store from './Store.vue'
import Order from './Order.vue'

export default {
  name: 'app',
  components: {
    Hero,
    Options,
    Store,
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
  /*text-align: center;*/
  width:80%;
  margin:0 auto;
  color: #2c3e50;
}
</style>
