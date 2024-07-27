<template>
    <div class="q-pa-md">
      <q-layout view="lHh lpr lFf" container style="height: 700px" class="shadow-0 rounded-borders">
    <q-page-container>
          
            <router-view></router-view>
          
        </q-page-container>
        
      </q-layout>
    </div>
    <FooterComponent />
  </template>
  <script setup>
  import HomeView from "./views/Home.vue"
  import FooterComponent from "./components/HomeComponents/Footer.vue"
  
  </script>
















<!--  
  <template>






    <div id="container">
      
       
    </div>
    
</template>

<script setup>
import HomeView from "./views/Home.vue"
//import FooterComponent from "./components/HomeComponents/Footer.vue"

</script>

<style>
#container{
 padding-left: 2%;
 padding-right: 2%;
}
</style>
  
  
  -->