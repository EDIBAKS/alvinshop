<template>
    <div id="greetings">
      <router-link style="text-decoration: none; color: inherit;"
      to="/">
      <h3 id="green">{{ welcomemsg }}</h3>
      </router-link>
      <br>
     <q-icon name="shopping_cart" size="26px" color="orange"></q-icon>
 
    </div>
    
    <div>

    </div>
 <!--
    <div id="marquee">
      <Vue3Marquee   :pauseOnHover="true" >
    <img height="45" width="45" src="/src/assets/cannon_eos_camera.png" />
    <img height="45" width="45" src="/src/assets/iphone_14.png" />
    <img height="45" width="45" src="/src/assets/playstation_5.png" />
  
   
  </Vue3Marquee>
     </div>
    -->
      
    
    
  </template>
  
  <script setup>
  const props = defineProps(["welcomemsg"]);
  </script>
  
  <style scoped>
  h1 {
    font-weight: 500;
    font-size: 3rem;
  }
  
  #greetings {
    display: flex;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-bottom: solid 0px black;
    color: rgb(19, 66, 41);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  #slogan{
    padding-top: 1px;
  }
  #marquee{
    display: flex;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-bottom: solid 0px black;
    color: rgb(19, 66, 41);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  #green{
    font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 550;
  font-style: normal;
  color: rgb(140, 187, 92);
  }
  </style>