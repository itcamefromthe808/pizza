<template>
  <form>
    <div class="content">
      <h2>Want to change some options?</h2>
    </div>

    <div class="columns">
      <div class="field column">
        <label class="label">How many people will be eating?</label>
        <div class="control">
          <input type="text" :value="people" @input="setPeopleOption" class="input">
        </div>
      </div>

      <div class="field column">
        <label class="label">How hungry are you? (scale of 1 to 10):</label>
        <input type="text" :value="hunger" @input="setHungerOption" class="input">
      </div>

      <div class="field column">
        <label class="label">Want to set the number of toppings per pizza?</label>
        <input type="text" :value="toppings" @input="setToppingOption" class="input">
      </div>
    </div>

    <div class="content">
      <h2>Anything else?</h2>
    </div>

    <div class="columns">
      <div class="field column">
        <div class="control">
          <label class="label" for="noCheese">Skip the Cheese?</label>
          <input class="checkbox" type="checkbox" name="noCheese" @change="setCheeseOption">
        </div>
      </div>

      <div class="field column">
        <div class="control">
          <label class="label" for="canDupeToppings">Exclude Duplicate Toppings?</label>
          <input class="checkbox" type="checkbox" name="canDupeToppings" @change="setDupeOption">
        </div>
      </div>

      <div class="field column">
        <div class="control">
          <label class="label" for="veggieScale">Veggie to Meat ratio?</label>
          <input type="range" name="veggieScale" min="0" max="100" :value="veggie" @change="setVeggieSlider">
        </div>
      </div>
    </div>
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
