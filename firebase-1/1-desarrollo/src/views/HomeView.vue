<template>
  <div class="home">
    <h1>Home</h1>
    <FormComp/>
    <UsersTable />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import UsersTable from '@/components/UsersTable.vue'
import FormComp from '@/components/FormComp.vue'

export default {
  name: 'HomeView',
  methods: {
    ...mapActions(['setUsuarios'])
  },
  components: {
    UsersTable,
    FormComp
  },
  mounted(){
    this.setUsuarios();
  }
}
</script>
