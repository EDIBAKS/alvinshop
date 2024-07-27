<template>

<q-page>
    <q-layout>
      <q-page-container>
<q-row>
 <!--<div><Search  :items="products"  /></div>   -->
 <div id="mhs"> <FilterRadios  /> </div>
<div id="searchbar">
  <!--<input type="text"  v-model="input" placeholder="Search fruits..." />-->
 
  <q-input outlined v-model="searchName" label="Search Products..." />
</div>

<!--the drop down is here-->
<div  id="dhs">
  <select
  v-model="selectedCategory"
  @input="filterCategory"
id="categories" 
class="">
  <option  disabled value="">select a category</option>
  
  <option :value="category.id" v-for="category in categories" :key="category.id">{{category.name}}</option> 
  
</select>


</div>
</q-row>
<q-row >
  <div class="q-col-gutter-md row items-start">
    <div class="col-4"  v-for="item in sortedFilteredItems" 
    :key="item.id">
      <div id="titles">{{ item.title }} 
      
      </div>
      
      <q-badge outline color="orange" :label=" item.price " />
        <q-img
        @click="showProduct(item.id)"
          :src="item.imgUrl"
          :ratio="1"
        />
      </div>
      </div>
      <div id="error" v-if="!sortedFilteredItems.length">
     <p>No results found <q-icon name="running_with_errors"/></p>
  </div>

 <!--
   <div cols="8" sm="6"
   v-for="item in sortedFilteredItems" 
  :key="item.id"
  @click="showProduct(item.id)">
  <q-col >
    <q-card
       class="my-card"
       style="width: 200px; height: 200px;"
       >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src="item.imgUrl">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption>{{ item.price }}</q-item-label>
        </q-item-section>
      </q-item>
      <img :src="item.imgUrl" style="width: 150px; height: 150px;">
      </q-card>
    
</q-col>
</div>
 --> 

  </q-row>
      </q-page-container>
      </q-layout>
      </q-page>
 
</template>
<script setup>
import { onMounted,ref,onUpdated,computed } from "vue";
//import axios from 'axios';
import { useRouter } from "vue-router";
import { db,doc,collection,getDocs} from "../../firebase";
import Search from "../AdminComponents/Search.vue";
import FilterRadios from "../ProductDetails/FilterRadios.vue";
import FilterDropdown from "../ProductDetails/FilterDropdown.vue";
import SearchComponent from "../ProductDetails/SearchForm.vue"
import VueSelect from "vue3-select-component"
const products=ref([])
//const input = ref('');
const selectedCategory = ref('')
const searchName = ref('');


const categories=ref([])

const searchFilter=ref('')
let items=products.value
const router=useRouter()


const getData=async()=>{
    const querySnapshot = await getDocs(collection(db, "vuestore"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}
onMounted(async()=>{
const result=await getDocs(collection(db,"vuestore"));
result.forEach((doc)=>{
  let product=doc.data();
  product.id=doc.id;
  //console.log("product",product)
  products.value.push(product)
  
})
//console.log("categoties",categories.value)
const result2=await getDocs(collection(db,"categories"));
result2.forEach((doc)=>{
  let categ=doc.data();
  //product.id=doc.id;
  //console.log("product",product)
  categories.value.push(categ)
  
})
});

const showProduct=(id)=>{
  console.log(id)
  router.push(`productdetails/${id}`)
}
onUpdated(()=>{

})


// Compute filtered items based on the selected category
const filteredItems = computed(() => {
    return items.filter(item => {
      const matchesCategory = !selectedCategory.value || item.categoryId === parseInt(selectedCategory.value);
      const matchesName = item.title.toLowerCase().includes(searchName.value.toLowerCase());
      return matchesCategory && matchesName;
    });
  });
  
  // Compute sorted and filtered items
  const sortedFilteredItems = computed(() => {
    return [...filteredItems.value].sort((a, b) => a.title.localeCompare(b.title));
  });




  //function filteredList() {
 
  //return items.filter((item) =>
  //item.title.includes(input.value.toLowerCase())
 // item.title.toLowerCase().includes(input.value.toLowerCase()) 
  //|| item.category.includes(selectedCat.value.toLowerCase())
 // );
//}
  </script>




 


<style scoped>
#titles{
  display: flex;
  color: rgb(140, 187, 92);
}
#searchbar{
  margin-top: 4px;
}
#searchcont{
    display:flex;
    height: 70px;
    align-items: center;
    font-size: 130%;
    border-bottom: solid 1px rgb(19, 66, 41);
}
#mhs{
    display: flex;
    flex: 7;
    gap: 10%;
    align-items: center;
    justify-content:flex-end;
    border-bottom: solid 1px rgb(19, 66, 41);;
}
#dhs{
  margin-top: 6px;
    display: flex;
    flex: 7;
    gap: 10%;
    align-items: center;
    justify-content:flex-end;
}
#lhs{
  display: flex;
    flex: 7;
    gap: 10%;
    align-items: center;
   

}
#rhs{
    display: flex;
    flex: 7;
    gap: 10%;
    align-items: center;
    justify-content: flex-end;
}
#products{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 3%;
    grid-gap: 3%;
}
#products img{
    width: 100%;
  
}
#prix{
  color: rgb(19, 66, 41);
}
#error {
  
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 70px;
}
select {
  background-color: #f0f0f0; /* Light gray background */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded corners */
  padding: 8px 12px; /* Padding for the dropdown */
  font-size: 16px; /* Font size */
  color: #333; /* Text color */
  width: 100%; /* Full width */
  box-sizing: border-box; /* Include padding and border in element’s total width and height */
  appearance: none; /* Remove default dropdown arrow */
  background: url('path/to/custom-arrow.svg') no-repeat right 10px center; /* Custom arrow */
  background-size: 12px 12px; /* Size of the arrow */
}
/* Styling on hover */
select:hover {
  background-color: #e0e0e0; /* Slightly darker gray on hover */
  cursor: pointer; /* Pointer cursor on hover */
}
/* Styling on focus */
select:focus {
  border-color: #007bff; /* Blue border on focus */
  outline: none; /* Remove default outline */
  box-shadow: 0 0 0 2px rgba(38, 143, 255, 0.25); /* Add a subtle shadow */
}
/* Option Styling */
select option {
  background-color: #fff; /* White background for options */
  color: #333; /* Text color */
  padding: 8px; /* Padding for options */
}


</style>