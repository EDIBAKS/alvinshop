<script setup>
import {ref,computed} from 'vue'
const isDropDownVisible=ref(false)

const selectedOption=ref(null)
const props=defineProps({
    categories:{
        type:Array,
        required:true
    },
    modelValue:{
      default:null
    }
});

const emit=defineEmits(['update:modelValue'])

const toggleOption=(category)=>{
  selectedOption.value=category
  emit('update:modelValue',category)
}

const MappedSelected=computed(()=>{
  return(selectedOption.value?.name || selectedOption) || 'Please select a category';
})


</script>
<template>
    
    <div class="dropdown_wrapper">
    <div class="selected_option" @click=" isDropDownVisible=true">
      {{ MappedSelected }}
    </div>
    <div class="options_wrapper" v-if="isDropDownVisible">
      <div class="option" v-for="(category,index) in categories" :key="index" @click="toggleOption(category)">
      {{ category.name || category }}
      </div>
    </div>
  </div>
      
</template>
<style scoped>
.options_wrapper{
  padding: 16px;
  cursor: pointer;
  max-width: 200px;
  margin: 0 auto;
}
.selected_option{
  padding: 16px;
  border: solid 1px #313131;
}
.option:hover{
  background: #c5c5c5;
}
.option{
padding: 16px;
border: solid 1px #313131;

}
.option:last-of-type{
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
}
</style>