<template>
    <div id="cart">
     
        <q-dialog :seamless="true" :modelValue="dialogVisibility"  position="right">
      <q-card id="cart_card" >
       <q-card-section>
          <div>
            <h6>Recently Added Items</h6>
          </div>

          <q-space />

        <div v-for="product in CartStore.cart" :key="product.id" id="cart_products">
          <div id="cart_product">
            <div id="lhs"><img :src="product.imgUrl" alt=""></div>
            <div id="rhs">
              <p>{{ product.title }}</p>
              <p>{{ product.price }}</p>
              <p>Qty: {{ product.quantity }}</p>
              <q-icon @click="removefrmCart(product.id)" name="delete"/>
            </div>
            </div>
        </div>
        <div id="cart_total">
            <p>Cart Total : {{ CartStore.cartTotal }}</p>
          </div>
        <div id="place_order">
            <router-link to="/orders">
              <q-btn v-if="CartStore.cartTotal>0" color="secondary" label="Proceed To Order"
            /></router-link>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
</template>
<script setup>
import {ref,defineProps} from 'vue'
//const dialog=ref(true)
//import our store which provides global acess to the data
import { useCartStore } from '../../dataStore/store';
//use a variable to initialize the store in this particular component
const CartStore=useCartStore()
defineProps(['dialogVisibility'])
//remove an item from Cart
const removefrmCart=(id)=>{
  //we shall utilise an action from the store wc will be evocked here
  CartStore.removefromCart(id)
}
</script>
<style scoped>
#cart_card{
  height: 770px;
  width: 330px;
  margin-top: 10%;
}
#place_order {
  margin-top: 5%;
}
#cart_total p {
  margin-top: 4%;
  font-size: 130%;
}
#cart_product{
  display: flex;
  border-bottom: solid 1px black;
}
#cart_product div{
 
  margin-top: 4%;
}
#lhs{
  display: flex;
  flex: 6;
}
#lhs img{
  width: 50%;
}
#rhs{
  display: flex;
  flex: 4;
  flex-direction: column;
  font-weight: 600;
  align-items: center;
  color:rgb(140, 187, 92);
  justify-content: center;
}
</style>
