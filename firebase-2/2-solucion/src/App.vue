<template>
  <NavBarComp />
  <router-view />
</template>

<script>
import NavBarComp from './components/NavBarComp.vue'

export default {
  name: 'App',
  components: {
    NavBarComp,
  }
}

</script>

<style>
.alignFormView {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
