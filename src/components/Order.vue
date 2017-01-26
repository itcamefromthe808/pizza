<template>
  <div>
    <h2>Here's your order!</h2>

    <div v-for="pie in pizzas">
      <p>Size: {{pie.size}}</p>
      <p>Crust: {{pie.crust}}</p>
      <p>Toppings:</p>
      <ul>
        <li v-for="t in pie.toppings">{{t}}</li>
      </ul>
    </div>
    <button @click.prevent="rebuildPizza">Rebuild Pizza</button>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  computed: mapGetters({
    pizzas: 'getPizzaShortDescriptions'
  }),
  methods: mapActions([
    'rebuildPizza'
  ])
}
</script>
