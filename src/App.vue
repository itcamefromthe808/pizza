<template>
  <main id="app">
    <h1>{{ msg }}</h1>

    <SearchZip></SearchZip>

    <SelectRestaurant></SelectResaurant>

  </main>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import SearchZip from './forms/SearchZip.vue';
import SelectRestaurant from './forms/SelectRestaurant.vue';

export default {
  name: 'app',
  components: {
    SearchZip,
    SelectRestaurant
  },
  data () {
    return {
      msg: "Welcome to the random Domino's pizza generator!"
    }
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
