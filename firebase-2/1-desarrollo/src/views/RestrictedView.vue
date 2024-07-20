<template>
  <h1 v-if="currentUser">Bienvenido al área restringida, {{ currentUser.email }}</h1>
</template>

<script>
import {auth} from '@/auth'
export default {
  name: 'RestrictedView',
  // props: {},
  data: function(){
    return {
      currentUser:''
    }
  },
  // computed: {},
  //methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  mounted(){
    this.currentUser = auth.currentUser
  }
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  
</style>