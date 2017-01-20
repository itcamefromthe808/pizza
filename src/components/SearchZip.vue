<template>
  <form @submit.prevent="validateBeforeSubmit">
    <fieldset>
      <legend>Zip Code</legend>
      <input type="text" name="zipcode" v-model="zip" placeholder="Enter Zip Code" v-validate data-vv-rules="required|digits:5"></input>
      <span v-show="errors.has('zipcode')" class="help is-danger">{{ errors.first('zipcode') }}</span>
    </fieldset>

    <button name="submit">Search your Zip Code!</button>
  </form>
</template>


<script>
export default {
  name: 'search-form',
  data () {
    return {
      zip:''
    };
  },
  methods: {
    validateBeforeSubmit() {
     // Validate All returns a promise and provides the validation result.
     this.$validator.validateAll().then(success => {
         if (! success) {
             // handle error
             return;
         }
     });
   }
 }
}
</script>
