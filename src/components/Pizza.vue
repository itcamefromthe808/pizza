<template>
  <div>
    <h2>Here's your pizza!</h2>
    <p>Size: {{size}}</p>
    <p>Crust: {{crust}}</p>
    <p>Toppings:</p>
    <ul>
      <li v-for="t in toppings">{{t}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size:'',
      toppings:[]
    };
  }
}
</script>
