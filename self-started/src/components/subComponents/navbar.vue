<template>
  <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <h3><i class="fa fa-arrow-circle-up"></i> {{navbarHeading}}</h3>
        </div>
        <div id="navbar" class="collapse navbar-collapse navbar-right">
          <ul class="nav navbar-nav">
            <li v-for="link in links"><router-link :to="link.url">{{link.label}}</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      navbarHeading: 'Self-Started',
      links: [
        {url: '/dashboard', label: "Dashboard"},
        {url: '/', label: "Home"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar {
        color: white;
        border-radius: 0;
    }
</style>