<template>
  <NavbarComp />
  <router-view />
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'

export default {
  name: 'App',
  components: {
    NavbarComp,
  }
}
</script>
