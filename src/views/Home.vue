<template>
    <div>
      <NavbarComponent />
      <BannerComponent welcomemsg="Alvin's E-shop" />
      
      <ProductComponent />
      
    </div>
  </template>
<script setup>
import NavbarComponent from "../components/HomeComponents/Navbar.vue"
import BannerComponent from "../components/HomeComponents/Banner.vue"
import ProductComponent from "../components/HomeComponents/Products.vue"

//import FiltersView from "../components/HomeComponents/Filters.vue"
//import FooterComponent  from "../components/HomeComponents/Footer.vue"
</script>