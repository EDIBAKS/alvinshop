<template>
    <div>
        <h1>{{msg}} </h1>
        <h2>{{ anothermsg }}</h2>
        <h3>{{ count }}</h3>
        <button @click="increment()">Increment</button>
        </div>
</template>
<script setup>
import { ref } from 'vue';
defineProps(["msg","anothermsg"])

const count=ref(0)
const increment=()=>{
count.value++;
console.log("count:",count.value)
}
</script>