<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav d-flex justify-content-between w-100">
          <div class="d-flex">
            <li class="nav-item">
              <router-link to="/" class="nav-link" activeClass="active disabled">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/restricted" class="nav-link" activeClass="active disabled">Restricted</router-link>
            </li>
          </div>
          <div class="d-flex">
            <li class="nav-item">
              <router-link to="/login" class="nav-link" activeClass="active disabled" v-if="!user">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link" activeClass="active disabled" v-if="!user">Signup</router-link>
            </li>
            <li class="nav-item">
              <button to="/signup" class="nav-link" activeClass="active disabled" v-if="user" @click="logout">Logout</button>
            </li>
          </div>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth, signOut } from '@/auth';
import { mapState } from 'vuex';

export default {
  name: 'NavBar',
  // props: {},
  data: function () {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async logout(){
      try {
        await signOut(auth);
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped></style>