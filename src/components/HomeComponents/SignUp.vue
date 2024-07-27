<template>
    <q-dialog 
    @click-outside="handleClickOutside"
    :seamless="true" 
    :modelValue="signUpVisible" 
    position="left">
    <div id="container">
      
        <q-card id="cart_card" >
            <q-form
      @submit.prevent="handleSubmit"
     id="sign_form"
      class="q-gutter-md"
    >
        <p class="text-h5 center">{{ isSignUp ? 'Sign Up' : 'Sign In' }}</p>

        <q-btn 
        @click="toggleMode"
        flat 
        style="color: #FF0080" 
        :label=" isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'" 
        />
       
           
        <q-input v-if="isSignUp" rounded outlined v-model="login_form.names" label="Names" />
            <q-input   type="email" rounded outlined v-model="login_form.email" label="Email Adress" />
           <q-input v-if="isSignUp" rounded outlined v-model="login_form.adress" label="Physical Adress" />
            <q-input v-if="isSignUp" type="number" rounded outlined v-model="login_form.telephone" label="Telephone" />
            <q-input v-if="isSignUp" rounded outlined v-model="login_form.username" label="UserName" />
            <q-input type="password" rounded outlined v-model="login_form.password" label="Password" />
            <q-input v-if="isSignUp" type="password" rounded outlined v-model="login_form.repeat" label="Repeat Password" />
<!--<button type="submit">{{ isSignUp ? 'Sign Up' : 'Sign In' }}</button> -->
        <div id="submit">
            <q-btn 
            @submit.prevent="register"
        type="submit" color="primary" 
        :label=" isSignUp ? 'Sign Up' : 'Sign In'" />
        </div>
       
       
        <!--<button @click="toggleMode">{{ isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up' }}</button>-->
    </q-form> 
    </q-card>
     </div>
    </q-dialog>


    
  </template>
  
  <script setup>
  import { ref } from 'vue';
import{auth} from '../../firebase'
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut 
} from "firebase/auth";

const login_form=ref({})

const register=()=>{
    store.dispatch('register',register_form.value)
}


  defineProps(['signUpVisible'])

  
  const isSignUp = ref(false);
  
  const formData = ref({
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const handleSubmit = () => {
    if (isSignUp.value) {
      if (formData.value.password !== formData.value.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      // Handle sign-up logic
      console.log('Sign Up', formData.value);
    } else {
      // Handle sign-in logic
      console.log('Sign In', formData.value);
    }
  };
  
  const toggleMode = () => {
    isSignUp.value = !isSignUp.value;
    // Reset form data
    formData.value = {
      email: '',
      password: '',
      confirmPassword: ''
    };
  };


  const handleClickOutside = () => {
    signUpVisible.value = false;
    };
  </script>
  
  <style scoped>
  #cart_card{
  height: 770px;
  width: 350px;
  margin-top: 10%;
  justify-items: center;
margin-left: 5px;
}
#container{
        margin-top: 10%;
        align-items: center;
    }
#sign_form{
        width: 100%;
    }
#submit{
   position: relative;
}
  </style>
  

  









<!--
<template>
    
    <div id="signup">
        <q-dialog :seamless="true" :modelValue="signUpVisible" position="left">
            <q-card id="cart_card" >
       <q-card-section>
          <div>
            <h6>Details Here</h6>
            <q-form
      @submit="onSubmit"
     id="sign_form"
      class="q-gutter-md"
    >

            <q-input rounded outlined v-model="text" label="Names" />
            <q-input  type="email" rounded outlined v-model="text" label="Email Adress" />
           <q-input rounded outlined v-model="text" label="Physical Adress" />
            <q-input type="number" rounded outlined v-model="text" label="Telephone" />
            <q-input rounded outlined v-model="text" label="UserName" />
            <q-input type="password" rounded outlined v-model="text" label="Password" />
            <q-input type="password" rounded outlined v-model="text" label="Repeat Password" />
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Cancel" type="cancel" color="warning"/>
</q-form>
            
           
          </div>

          <q-space />

       
        
        
        </q-card-section>
      </q-card>

            </q-dialog>
    </div>
</template>



<script setup>
import {ref,defineProps} from 'vue'

defineProps(['signUpVisible'])
</script>
<style scoped>
#cart_card{
  height: 770px;
  width: 350px;
  margin-top: 10%;
}
</style>
-->