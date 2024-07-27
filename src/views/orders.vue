<template>
  <NavBar/>
    
    <div id="container">
      <p>{{ currentDateTime }}</p>
      <q-form
      @submit="onSubmit"
     id="orders_form"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.name"
        label="Your name *"
        hint="Name and surname"
      
      />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Contact *"
        hint="Telephone"
        
      />
      <q-input
        filled
        v-model="form.adress"
        label="Physical Adress*"
        hint="Place of Residence"
      
      />
     
      <q-input
        filled
        v-model="form.email"
        label="Email*"
        hint="Email"
      
      />
    

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        
      </div>
    </q-form></div>
</template>
    <script setup>
   
import NavBar from '../components/HomeComponents/Navbar.vue'
import { reactive,ref,onMounted } from 'vue'
import {useCartStore} from '../dataStore/store'
import {db, collection, addDoc} from '../firebase'
import { useRouter } from 'vue-router';

const router = useRouter();
const stored=useCartStore()
const currentDateTime = ref('');
const form=reactive({
    name:'',
    contact:null,
    adress:'',
    email:'',
    productDetail:stored.cart,
    total:stored.cartTotal,
    DateAdded:currentDateTime
})

const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString();  // Format the date as you prefer
      const time = now.toLocaleTimeString();  // Format the time as you prefer
      currentDateTime.value = `${date} ${time}`;
    
      //console.log('Date',currentDateTime.value)
    };
    
    onMounted(() => {
  
      updateDateTime();
      setInterval(updateDateTime, 3000);  // Update the time every second
    });

const onSubmit = async () => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "CartOrders"), form);
 // console.log("Document written with ID: ", docRef.id);
 alert('Order Submitted')
 router.push('/')
};
    </script>
    <<style scoped>
    #container{
        margin-top: 10%;
    }
    #orders_form{
        width: 100%;
    }
    </style>
