<template>
  <form>
    <fieldset>
      <legend>Zip Code</legend>
      <input type="text" name="zipcode" v-model="zip" placeholder="Enter Zip Code" v-validate data-vv-rules="required|digits:5"></input>
    </fieldset>
    <span v-show="errors.has('zipcode')" class="help is-danger">{{ errors.first('zipcode') }}</span>
    <button :disabled="!fields.passed()" @click.prevent="setZip">Search your Zip Code!</button>
  </form>
</template>


<script>
export default {
  name: 'search-form',
  computed: {

  },
  data () {
    return {
      zip:''
    };
  },
  methods: {
    setZip() {
      console.log('zipcode entered:', this.zip)
      this.$store.dispatch('lookup', this.zip)
    }
  }
}
</script>
