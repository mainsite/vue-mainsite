<template>
  <div id="selfStarted">
    <navbar></navbar>
    <h1>Hello VUE</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/subComponents/navbar';
export default {
  name: 'self-Started',
  components: {
    'navbar': navbar
  }
}
</script>

<style>
#selfStarted {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
