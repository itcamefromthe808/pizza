<template>
  <div class="content">
    <h2>Here's your order!</h2>

    <table>
      <thead>
        <tr>
          <th>Pizza</th>
          <th>Size:</th>
          <th>Crust:</th>
          <th>Toppings:</th>
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
