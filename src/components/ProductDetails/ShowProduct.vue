<template>
  
 <div id="container" class="q-pa-md">
  <div class="q-gutter-md row items-start">
    
    <q-card class="my-card" flat  >
      <div class="img_hold">
        <q-img
        :src="product.imgUrl"
      />
      </div>
      
      
      

      <q-card-section>
        <div id="qt_btn" class="text-overline text-orange-9">Category:Clothes</div>
        <div class="text-h5 q-mt-sm q-mb-xs q-gutter-lg text-green-7">{{ product.title }}
        
        </div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div id="qtn_btn" class="q-gutter-lg ">
          <q-btn @click="decrement()" round color="red-7" icon="remove_circle"/>
           <q-btn flat round color="primary" :label="quantity" padding="4"/>
          <q-btn @click="increment()" round color="blue" icon="add_circle" />
          <q-btn @click="addtoCart(product)" unelevated rounded color="blue" label="Add To Cart" icon="shopping_cart" />
        </div>
        
      </q-card-section>

      <q-card-actions>
        
        
        <q-space />

       
      </q-card-actions>

      
    </q-card>
    
</div>
</div>
   <!--
   <div id="container">
    <div id="lhs">
        <img :src="product.imgUrl" alt="">
    </div>
    <div id="rhs">
        <p>{{product.title }}</p>
        <p>{{ product.price}}</p>
        <div id="quantity_section">
        <q-btn
          @click="decrement()"
          text-color="black"
          color="red"
          label="-"
        />
        <p>{{ quantity }}</p>

        <q-btn
          @click="increment()"
          text-color="black"
          color="green"
          label="+"
        />
      </div>
      <div id="lstbtn">
        <q-btn @click="addtoCart(product)" id="AddToCartbtn" color="secondary" label="Add To Cart"/>
      </div>
       
    </div>
   </div>
   
   -->
</template>
<script setup>
import { onMounted,ref } from "vue";
import { db,doc, getDoc } from "../../firebase";
import { useCartStore } from "../../dataStore/store";
import {useRoute} from "vue-router"

const route=useRoute()
const product=ref({})
const quantity = ref(1);
const buttondisable = ref(false);

const cartStore=useCartStore()

const addtoCart = (product) => {
  product.quantity = quantity.value;
  cartStore.addtoCart(product);
  console.log("cartStore:", cartStore.cart);
  buttondisable.value = true;
};

const increment = () => {
  quantity.value++;
};
const decrement = () => {
  quantity.value = quantity.value > 1 ? quantity.value - 1 : 1;
};

//the function here returns product details corresponding to the ID captured in the route
onMounted(async()=>{
    const docRef = doc(db, "vuestore", route.params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  //console.log("Document data:", docSnap.data());
  let prod=docSnap.data()
  prod.id=docSnap.id
 product.value=prod
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
})
//calling the action present in store.js
//The same fn will sent along details of wc prdt to add to cart

</script>
<style scoped>
#AddToCartbtn {
  width: 20%;
  margin-top: 5%;
}

#quantity_section {
  display: flex;
    flex: 7;
    gap: 10%;
   align-items: center;
  
  font-size: 90%;
}
#container{
    display: flex;
    margin-top: 5%;
    align-items: center;
    padding: auto;
    
}
#lhs{
    display: flex;
    flex: 4;
}
#lhs img{
    width: 100%;
}
#rhs{
    display: flex;
    flex: 6;
    flex-direction: column;
    margin-left: 3%;
    font-size: 100%;
}
p{
    font-weight: 700;
    color: rgb(54,126,89);
}
#qt_btn{
  padding-left: 15%;
}
#qtn_btn{
  padding-left: 15%;
  padding-top: 10%;
}
#img_hold{
padding: auto;
}
</style>