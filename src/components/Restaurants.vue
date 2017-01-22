<template>
  <form>
    <fieldset>
      <legend>Please select a Restaurant below!</legend>
      <select id="select-restaurant" :disabled="!restaurants.length" v-model="selected" @change="selectRestaurant(selected)">
        <option v-for="r in restaurants" v-bind:value="r.StoreID">
          {{ r.AddressDescription }}
        </option>
      </select>
    </fieldset>
  <form>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: mapGetters({
    restaurants: 'allRestaurants'
  }),
  methods: mapMutations([
    'selectRestaurant'
  ]),
  data () {
    return {
      selected:null
    };
  }
}
</script>
