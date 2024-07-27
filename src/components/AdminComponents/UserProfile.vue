<template>
   <p class="subtitle-2">Welcome:{{ $store.state.user.email }}</p> 
   <p class="subtitle-2">Welcome:{{ $store.state.user}}</p> 
   <div>
      <button @click="$store.dispatch('logout')">LogOut</button>
   </div>
</template>
<script setup>
import {useStore} from 'vuex'
import {onBeforeMount} from 'vue'
const store=useStore()

onBeforeMount(()=>{
  store.dispatch('fetchUser')
  return{
  user:store.state.user
}
})


</script>
<style scoped>

</style>