<template>
   <div id="addproductform">
   
 

    <q-form
      @submit="onSubmit"
      
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.title"
        label="Product Title *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="form.price"
        label="Product Price *"
        
      />

      <q-file
      
      v-model="file" 
      label="Choose Product Image"
      @update:model-value="fileUpload"
       />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  

    
   </div> 
</template>

<script setup>
import { ref,reactive } from "vue"
import { db,collection, addDoc } from "../../firebase"; 
import{ getStorage,uploadBytesResumable, getDownloadURL,ref as firebaseref } from '../../firebase'
const file=ref(null)

const form =reactive({
  title:'',
  price:'',
  imgUrl:''
})

//function to upload the file to firebase storage
const fileUpload=()=>{
 const storage = getStorage();
const storageRef = firebaseref(storage, 'products/'+file.value.name);
//actual file storage happens here
const uploadTask = uploadBytesResumable(storageRef, file.value);
uploadTask.on('state_changed', 
  (snapshot) => {
   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
     // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      form.imgUrl=downloadURL;
      alert("Upload Sucessfull")
    });
  }
);
}

const onSubmit=async()=>{
 // Add a new document with a generated id.
const docRef = await addDoc(collection(db, "vuestore"), form);
console.log("Document written with ID: ", docRef.id);
form.title=''
form.price=''
alert("Product Registered")
}
</script>

<style  scoped>
#addproductform{
width: 50%;

}
</style>
