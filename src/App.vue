<template>
  <main id="app">
    <h1>{{ msg }}</h1>

    <form id="query-form" action="">
      <button v-on:click="searchZip">Search your Zip Code</button>
    </form>
  </main>
</template>

<script>
module.exports = {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to the random pizza generator!'
    }
  },
  methods: {
    searchZip: function() {
      console.log('searching zip');
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
