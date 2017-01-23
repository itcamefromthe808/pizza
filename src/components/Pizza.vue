<template>
  <div>
    <h2>Here's your pizza!</h2>
    <p>Size: {{short.size}}</p>
    <p>Crust: {{short.crust}}</p>
    <p>Toppings:</p>
    <ul>
      <li v-for="t in short.toppings">{{t}}</li>
    </ul>
    <button>Rebuild Pizza</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    short: 'getPizzaShortDescription'
  })
}
</script>
