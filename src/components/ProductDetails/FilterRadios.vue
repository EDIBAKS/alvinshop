<script setup>
const emit=defineEmits(['filter'])
const filter=(e)=>{
    emit('filter',e.target.value)
}
</script>

<template>
    <label class="flex mr-4 items-center flex-nowrap">
        <input type="radio" name="show" value="all" checked @change="filter">
        <span class="whitespace-nowrap ml-1">Show All</span>
    </label>
    <label class="flex mr-4 items-center flex-nowrap">
        <input type="radio" name="show" value="today" @change="filter">
        <span class="whitespace-nowrap ml-1">Added Today</span>
    </label>
    <!--
    <label class="flex mr-4 items-center flex-nowrap" @change="filter">
        <input type="radio" name="show" value="">
        <span class="whitespace-nowrap ml-1">Past Due</span>
    </label>
    -->
</template>