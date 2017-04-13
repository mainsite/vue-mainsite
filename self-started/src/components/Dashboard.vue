<template>
  <div class="hello">
  Hello Dashboard page <br>
  {{msg}}
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'this also a message from the controller'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>