<template>
  <main class="alignFormView container">
    <div>
      <h1 class="text-center">Registrar usuario</h1>
    </div>
    <div class="row">
      <form class="col-4 mx-auto" @submit.prevent="register">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" name="email" id="email" class="form-control" v-model="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" name="password" class="form-control" id="password" v-model="password">
        </div>
        <div class="mb-3">
          <label for="passwordConfirm" class="form-label">Confirma Password</label>
          <input type="password" name="passwordConfirm" class="form-control" id="passwordConfirm"
            v-model="passwordConfirm">
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-outline-success">
            <span class="spinner-border spinner-border-sm" aria-hidden="true" v-if="loadingRegister"></span>
            <p class="m-0" v-if="!loadingRegister">
              Registrar
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
import { auth, createUserWithEmailAndPassword } from '@/auth'

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
        return this.errorMessage = 'Todos los campos son obligatorios'
      }
      if (this.password !== this.passwordConfirm) {
        return this.errorMessage = 'Las contraseñas no coinciden'
      }

      this.loadingRegister = true
      try {
        let result = await createUserWithEmailAndPassword(auth, this.email, this.password);
        let { user } = result;
        alert(`Usuario ${user.email} registrado correctamente`);
        this.$router.push('/restricted')
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.loadingRegister = false;
      }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
  }
}
</script>

<style scoped></style>