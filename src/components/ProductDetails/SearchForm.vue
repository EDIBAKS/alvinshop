<template>
  <div id="navbar">
       <div id="lhs" >
     
       <div>
        <!--<q-input update:modelValue="search" label="Search products by name..."  class="input-box"/> -->
        <input type="text" @input="search" id="search" placeholder="Enter Search Text">
        
      </div>
       
     
   </div>

     
       
   </div>
</template>
<script setup>
import {ref} from 'vue'


const emit=defineEmits(['search'])
const search=(e)=>{
  emit('search',e.target.value)
}



</script>
<style scoped>
:deep(.input-box .q-field__control),
:deep(.input-box .q-field__marginal) {
  height: 42px;
  width: 900px;
  font-size: 16px;
}
#navbar{
   display:flex;
   height: 70px;
   align-items: center;
   font-size: 130%;
   
}
#lhs{
   display: flex;
   flex: 3;
   align-items: center;

}
#rhs{
   display: flex;
   flex: 7;
   gap: 10%;
   align-items: center;
   justify-content:end;
}
#cart{
   display: flex;
   align-items: center;
}
#cart_count{
   padding-bottom: 12px;
}
</style>













