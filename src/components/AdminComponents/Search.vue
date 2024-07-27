
 <template>
   <input type="text"  v-model="input" placeholder="Search fruits..." />
  <div class="item fruit" v-for="item in filteredList()" :key="item.id">
    <p>{{ item.title }}</p>
    <p>{{ item.price }}</p>
  </div>
  <div class="item error" v-if="input&&!items.length">
     <p>No results found!</p>
  </div>
</template>  
 
<script setup>
import { ref,computed } from "vue";
let input = ref("");
const searchFilter=ref('')
const fruits = ["apple", "banana", "orange"];

const props=defineProps({
items:{
    type:Array,
    required:true
}
})
let items=props.items;



//const filteredItems=(()=>{
 // if (input.value!=''){
    items=items.filter(item=>
    //item.title.includes(input.value)
    item.Title.includes(searchFilter.value) || item.Name.includes(searchFilter.value)
    );
//}
//return items;

//})
  

  function filteredList() {
  return items.filter((item) =>
  //item.title.includes(input.value.toLowerCase())
  item.title.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>

<script setup>
</script>