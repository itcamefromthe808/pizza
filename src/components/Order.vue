<template>
  <section class="section">
    <div class="content"><h2>Here's your order!</h2></div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Size</th>
          <th>Crust</th>
          <th>Toppings</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pie, index) in pizzas">
          <td>{{index + 1}}</td>
          <td>{{pie.size}}</td>
          <td>{{pie.crust}}</td>
          <td>
            <span v-for="t in pie.toppings">{{t}}, </span>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="button is-primary" :disabled="!hasMenu" @click.prevent="rebuildPizza">Rebuild Pizza</button>
  </section>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  computed: mapGetters({
    pizzas: 'getPizzaShortDescriptions',
    hasMenu: 'hasMenu'
  }),
  methods: mapActions([
    'rebuildPizza'
  ])
}
</script>
