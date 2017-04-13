<template>
  <div class="hello">
  Hello Dashboard page <br>
  {{msg}}
  <div>
    <h3>Here is a list of Users</h3>
    <ul>
      <li v-for="user in users">{{user.firstName}} {{user.lastName}}</li>
    </ul>
  </div>
  </div>
</template>

<script>
import UsersService from '../components/services/users.service';
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'this also a message from the controller',
      users: []
    }
  },
  methods: {
    getUsers() {
      UsersService.getUsers(res => this.users = res);
    }
  },
  created() {
    this.getUsers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>