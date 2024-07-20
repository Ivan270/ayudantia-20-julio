<template>
  <main class="alignFormView">
    <div>
      <h1 class="text-center">Login</h1>
    </div>
    <form class="w-50 mx-auto" @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" name="email" class="form-control" placeholder="your@mail.com" v-model="email"
          required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" name="password" class="form-control" autocomplete="current-password"
          v-model="password" required>
      </div>
      <div class="d-grid">
        <button type="submit" class="btn btn-outline-success" :disabled="loadingLogin">
          <span class="spinner-border spinner-border-sm" aria-hidden="true" v-if='loadingLogin'></span>
          <p class="m-0" v-if="!loadingLogin">
            Iniciar Sesion
          </p>
        </button>
      </div>
      <div>
        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
      </div>
    </form>
  </main>
</template>

<script>
import { auth, signInWithEmailAndPassword } from '@/auth'

export default {
  name: 'LoginView',
  // props: {},
  data: function () {
    return {
      email: '',
      password: '',
      loadingLogin: false,
      errorMessage: ''
    }
  },
  // computed: {},
  methods: {
    async login() {
      if (!this.email || !this.password) {
        return alert('Debes completar todos los campos.')
      }
      this.loadingLogin = true;
      try {
        let result = await signInWithEmailAndPassword(auth, this.email, this.password)
        let { user } = result;
        console.log(`Usuario ${user.email} inicia sesión exitosamente.`)
        this.$router.push('/')
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.loadingLogin = false;
      }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
  }
}
</script>

<style scoped>

</style>