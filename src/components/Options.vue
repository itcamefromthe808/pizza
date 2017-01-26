<template>
  <form>
    <h2>Want to change some options?</h2>
    <fieldset>
      <legend>How many people will be eating?</legend>
      <input type="text" :value="people" @input="setPeopleOption">
    </fieldset>
    <fieldset>
      <legend>How hungry are you? (scale of 1 to 10):</legend>
      <input type="text" :value="hunger" @input="setHungerOption">
    </fieldset>
    <fieldset>
      <legend>Want to set the number of toppings per pizza?</legend>
      <input type="text" :value="toppings" @input="setToppingOption">
    </fieldset>
    <fieldset>
      <legend>Anything else?</legend>
      <label for="noCheese">No Cheese?</label>
      <input type="checkbox" name="noCheese" @change="setCheeseOption">
      <label for="canDupeToppings">No Duplicate Toppings?</label>
      <input type="checkbox" name="canDupeToppings" @change="setDupeOption">
      <label for="veggieScale">Veggie to Meat ratio?</label>
      <input type="range" name="veggieScale" min="0" max="100" :value="veggie" @change="setVeggieSlider">
    </fieldset>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    'toppings': 'getToppingOption',
    'hunger': 'getHungerOption',
    'people': 'getPeopleOption',
    'dupes':'getDupesOption',
    'veggie':'getVeggieSlider'
  }),
  methods: mapActions([
    'setPeopleOption',
    'setHungerOption',
    'setToppingOption',
    'setCheeseOption',
    'setDupeOption',
    'setVeggieSlider'
  ])
}
</script>
