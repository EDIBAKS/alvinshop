<template>
  <div class="auth-form">
    <router-link style="text-decoration: none; color: inherit;"
       to="/">
       <q-icon name="arrow_back" size="45px" />Back
      </router-link>
  
    <h2>{{ isSignUp ? 'Sign Up' : 'Sign In' }}</h2>
    <form class="login" @submit.prevent="login">
      <div v-if="!isSignUp">
        <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="login_form.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="login_form.password" required />
      </div>
      <button class="buttons" type="submit">Log In</button>
      </div>
      
     </form>



     <form 
     class="register"
     @submit.prevent="register"
     >
      <div v-if="isSignUp">
        <label for="names">Names:</label>
        <input id="names" type="text" v-model="register_form.names" required />
        <label for="telephone">Telephone</label>
        <input id="telephone" type="number" v-model="register_form.telephone" required />
        <label for="adress">PysicalAdress</label>
        <input id="adress" type="text" v-model="register_form.adress" required />
        <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="register_form.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="register_form.password" required />
      </div>
      <div>
        <label for="password">Repeat Password:</label>
        <input id="confirmPassword" type="password" v-model="register_form.confirmPassword" required />
      </div>
      <button class="buttons" type="submit">Register</button>
      </div>
      
    </form>
    <div id="toggle-btn">
      <q-btn 
     @click="toggleMode"
     
     outline style="color: black;"
     :label="isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'" />
    </div>
    
    
  
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
const isSignUp = ref(false);
const login_form=ref({})
const register_form=ref({})
const store= useStore()
const login=()=>{
    store.dispatch('login',login_form.value)
}
//the actual register fn
const register=()=>{
  if (register_form.value.password !== register_form.value.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    store.dispatch('register',register_form.value)
}

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
  login_form.value = {
    email: '',
    password: '',
    confirmPassword: ''
  };
};
</script>

<style scoped>
#toggle-btn{
  margin-top: 15px;
  margin-left: 12%;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}



.auth-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.auth-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.auth-form form {
  display: flex;
  flex-direction: column;
}

.auth-form form div {
  margin-bottom: 15px;
}

.auth-form form label {
  margin-bottom: 5px;
  font-weight: bold;
}

.auth-form form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

 .buttons {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  margin-left: 25%;
  
}

.buttons:hover {
  background-color: rgb(140, 187, 92);
}

.auth-form .toggle-btn {
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
  color: #007bff;
}

.auth-form .toggle-btn:hover {
  text-decoration: underline;
}
</style>
