<template>
  <form>
    <h2>Want to change some options?</h2>
    <fieldset>
      <legend>How many people will be eating?</legend>
      <input type="text" :value="people" @input="setPeopleOption"></input>
    </fieldset>
    <fieldset>
      <legend>How hungry are you? (scale of 1 to 10):</legend>
      <input type="text" :value="hunger" @input="setHungerOption"></input>
    </fieldset>
    <fieldset>
      <legend>Want to set the number of toppings per pizza?</legend>
      <input type="text" :value="toppings" @input="setToppingOption"></input>
    </fieldset>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    'toppings': 'getToppingOption',
    'hunger': 'getHungerOption',
    'people': 'getPeopleOption'
  }),
  methods: mapActions([
    'setPeopleOption',
    'setHungerOption',
    'setToppingOption'
  ])
}
</script>
