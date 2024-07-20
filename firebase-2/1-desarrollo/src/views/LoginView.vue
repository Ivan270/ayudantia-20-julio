<template>
  <main class="alignFormView container">
    <div>
      <h1 class="text-center">Login</h1>
    </div>
    <div class="row">
      <form class="col-4 mx-auto" @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" name="email" id="email" class="form-control" v-model="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" name="password" class="form-control" id="password" v-model="password">
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-outline-success">
            <span class="spinner-border spinner-border-sm" aria-hidden="true" v-if="loadingLogin"></span>
            <p class="m-0" v-if="!loadingLogin">
              Iniciar sesión
            </p>
          </button>
        </div>
        <div>
          <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
        </div>
      </form>
    </div>
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
    async login(){
      if(!this.email || !this.password){
        return this.errorMessage = 'Debes completar todos los campos'
      }
      this.loadingLogin = true;

      try {
        let result = await signInWithEmailAndPassword(auth, this.email, this.password)
        let { user } = result
        console.log(`Usuario ${user.email} inicia sesión exitosamente.`)
        this.$router.push('/restricted')
      } catch (error) {
        this.errorMessage = error.message
      } finally {
        this.loadingLogin = false;
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