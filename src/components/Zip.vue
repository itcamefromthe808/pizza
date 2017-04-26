<template>
  <form>
    <label class="label">
      Zip Code
      <span v-show="errors.has('zipcode')" class="help is-danger">{{ errors.first('zipcode') }}</span>
    </label>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" name="zipcode" v-model="zip" placeholder="Enter Zip Code" v-validate data-vv-rules="required|digits:5">
      </div>
      <div class="control">
        <button class="button is-info" :disabled="!fields.passed()" @click.prevent="setZip(zip)">Search your Zip Code!</button>
      </div>
    </div>
  </form>
</template>


<script>
import { mapActions } from 'vuex'

export default {
  name: 'zip',
  methods: mapActions([
    'setZip'
  ])
}
</script>
