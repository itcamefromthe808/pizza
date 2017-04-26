<template>
  <section class="section">
    <div class="content">
      <h2>Let's find a store near you!</h2>
    </div>

    <div class="columns">
      <div class="column">
        <Zip></Zip>
      </div>

      <div class="column">
        <Restaurants></Restaurants>
      </div>
    </div>
  </section>
</template>

<script>
import Zip from './Zip.vue'
import Restaurants from './Restaurants.vue'

export default {
  name: 'store',
  components: {
    Zip,
    Restaurants
  }
}
</script>
