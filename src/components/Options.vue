<template>
  <form>
    <h2>Want to change some options?</h2>
    <fieldset>
      <legend>How many people will be eating?</legend>
    </fieldset>
    <fieldset>
      <legend>How hungry are you? (scale of 1 to 10):</legend>
      <input type="text"></input>
    </fieldset>
    <fieldset>
      <legend>Want to set the number of toppings per pizza?</legend>
    </fieldset>
  </form>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    get: 'getOptions'
  }),
  methods: mapMutations({
    set: 'setOptions'
  })
}
</script>
