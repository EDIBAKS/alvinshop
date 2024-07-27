<template>
   <div id="navbar">
        <div id="lhs">
      <router-link style="text-decoration: none; color: inherit;"
       to="/">
       <q-icon name="house" size="30px"/>
        <div class="text-subtitle2">Home</div>
      </router-link>
      
    </div>

        <div id="rhs">
            <div id="account">
                <router-link style="text-decoration: none; color: inherit;"
       to="/login">
       <q-icon name="people" size="30px"/>
       <div class="text-subtitle2">SignUp</div>
      
    </router-link>
            </div>
        
           
           
            <img src="" alt="">
            <div id="cart">
    <q-icon @click="dialog =! dialog" name="shopping_cart" size="30px"/>
            <div id="cart_count">{{ Cartstore.cartCount }}</div>
            <CartPop :dialogVisibility="dialog" />
            <signUp :signUpVisible="signup" />
        </div>
        
        </div>
        
    </div>
</template>
<script setup>
import {ref} from 'vue'
import router from '../../router'
//import your pinia store from store.js
import { useCartStore } from '../../dataStore/store';
import CartPop from "../CartComponents/CartPopUp.vue"
import SignUp from "../HomeComponents/SignUp.vue"
const dialog=ref(false)
const signup=ref(false)


//use a variable to initalize the store in this component
const Cartstore= useCartStore()
console.log("store",Cartstore)
</script>
<style scoped>
#account{
    display: flex;
}
#navbar{
    display:flex;
    height: 70px;
    align-items: center;
    font-size: 130%;
    border-bottom: solid 1px black;
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
    justify-content: flex-end;
    cursor: pointer;
}
#cart{
    display: flex;
    align-items: center;
}
#cart_count{
    padding-bottom: 12px;
}
</style>