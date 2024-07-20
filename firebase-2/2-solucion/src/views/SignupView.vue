<template>
  <main class="alignFormView">
    <div>
      <h1 class="text-center">Vista register</h1>
    </div>
    <form class="w-50 mx-auto" @submit.prevent="register">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" name="email" class="form-control" placeholder="your@mail.com" v-model="email"
          >
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" name="password" class="form-control" autocomplete="current-password"
          v-model="password" >
      </div>
      <div class="mb-3">
        <label for="passwordConfirm" class="form-label">Confirma Password</label>
        <input type="password" id="passwordConfirm" name="passwordConfirm" class="form-control"
          autocomplete="current-password" v-model="passwordConfirm" >
      </div>
      <div class="d-grid">
        <button type="submit" class="btn btn-outline-primary" :disabled="loadingRegister">
          <span class="spinner-border spinner-border-sm" aria-hidden="true" v-if='loadingRegister'></span>
          <p class="m-0" v-if="!loadingRegister">
            Registrar
          </p>
        </button>
      </div>
      <div>
        <p class="text-danger" v-if="errorMessage">{{ errorMessage }}</p>
      </div>
    </form>
  </main>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from '@/auth';

export default {
  name: 'SignupView',
  // props: {},
  data: function () {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      loadingRegister: false,
      errorMessage: ''
    }
  },
  // computed: {},
  methods: {
    async register() {
      if (!this.email || !this.password || !this.passwordConfirm) {
        return this.errorMessage = 'Debes completar todos los campos.'
      }
      if (this.password != this.passwordConfirm) {
        return this.errorMessage = 'Contraseñas no coinciden'
      }
      this.loadingRegister = true
      try {
        let result = await createUserWithEmailAndPassword(auth, this.email, this.password);
        console.log(result);
        let { user } = result;
        alert(`Usuario ${user.email} registrado con éxito.`)
        this.$router.push('/')
      } catch (error) {
        this.errorMessage = error.message
      } finally {
        this.loadingRegister = false
      }
    }
  }
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped></style>