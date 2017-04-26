<template>
  <section class="section">
    <div class="content"><h2>Enter your information below!</h2></div>
    <form>
      <div class="columns">
        <div class="field column">
          <label class="label">How many people will be eating?</label>
          <div class="control">
            <input type="text" :value="people" @input="setPeopleOption" class="input">
          </div>
        </div>

        <div class="field column">
          <label class="label">How hungry is everyone? (scale of 1 to 10):</label>
          <input type="text" :value="hunger" @input="setHungerOption" class="input">
        </div>

        <div class="field column">
          <label class="label">How many toppings per pizza?</label>
          <input type="text" :value="toppings" @input="setToppingOption" class="input">
        </div>
      </div>

      <div class="content">
        <h3>Anything else?</h3>
      </div>

      <div class="columns">
        <div class="field column">
          <div class="control">
            <label class="label" for="noCheese">
              Skip the Cheese?
              <input class="checkbox" type="checkbox" name="noCheese" @change="setCheeseOption">
              <p class="help">This adds another random topping</p>
            </label>
          </div>
        </div>

        <div class="field column">
          <div class="control">
            <label class="label" for="canDupeToppings">
              Exclude Duplicate Toppings?
              <input class="checkbox" type="checkbox" name="canDupeToppings" @change="setDupeOption">
              <p class="help">Applied on a per pizza basis</p>
            </label>
          </div>
        </div>

        <div class="field column">
          <div class="control">
            <label class="label" for="veggieScale">Veggie to Meat ratio?</label>
            More Meat
            <input type="range" name="veggieScale" min="0" max="100" :value="veggie" @change="setVeggieSlider">
            More Veggies
          </div>
        </div>
      </div>
    </form>
  </section>
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
