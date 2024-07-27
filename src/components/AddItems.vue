<template>
    <div>
      <h2>{{ isEditing ? 'Edit' : 'Add' }} Inventory Item</h2>
      <form @submit.prevent="saveItem">
        <input v-model="itemName" placeholder="Item Name" required />
        <input v-model.number="itemQuantity" type="number" placeholder="Quantity" required />
        <button type="submit">{{ isEditing ? 'Update' : 'Add' }} Item</button>
        <button v-if="isEditing" @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue';
  import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
  import { db } from '../firebase';
  import { useStore } from '../store';
  
  const store = useStore();
  const itemName = ref('');
  const itemQuantity = ref(0);
  const isEditing = ref(false);
  const currentItem = ref(null);
  
  watchEffect(() => {
    if (store.state.editItem) {
      itemName.value = store.state.editItem.name;
      itemQuantity.value = store.state.editItem.quantity;
      isEditing.value = true;
      currentItem.value = store.state.editItem;
    } else {
      resetForm();
    }
  });
  
  const saveItem = async () => {
    try {
      if (isEditing.value) {
        await updateDoc(doc(db, 'inventory', currentItem.value.id), {
          name: itemName.value,
          quantity: itemQuantity.value
        });
      } else {
        await addDoc(collection(db, 'inventory'), {
          name: itemName.value,
          quantity: itemQuantity.value
        });
      }
      resetForm();
    } catch (e) {
      console.error('Error saving document: ', e);
    }
  };
  
  const resetForm = () => {
    itemName.value = '';
    itemQuantity.value = 0;
    isEditing.value = false;
    currentItem.value = null;
    store.commit('clearEditItem');
  };
  
  const cancelEdit = () => {
    resetForm();
  };
  </script>
  