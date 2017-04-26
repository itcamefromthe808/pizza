<template>
  <form>
    <label class="label">Please select a Restaurant below!</label>
    <div class="field">
      <div class="control">
        <span class="select is-fullwidth">
          <select id="select-restaurant" class="is-expanded" :disabled="!restaurants.length" v-model="selected" @change="selectRestaurant(selected)">
            <option v-for="r in restaurants" v-bind:value="r.StoreID">
              {{ r.AddressDescription }}
            </option>
          </select>
        </span>
      </div>
    </div>
  <form>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    restaurants: 'allRestaurants'
  }),
  methods: mapActions([
    'selectRestaurant'
  ]),
  data () {
    return {
      selected:null
    };
  }
}
</script>
