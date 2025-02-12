import { createStore } from "vuex";
import router from '../router'
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut 
} from "firebase/auth";
export default createStore({
    state:{
   user:null,
   name:null
   
    },
    mutations:{
       SET_USER(state,user){
        state.user=user
        state.name=user
       },
       CLEAR_USER(state){
        state.user=null
       }
    },
    actions:{
        //The function that logins an existing user
async login ({ commit }, details) {
            const { email, password } = details
      
            try {
              await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
              switch(error.code) {
                case 'auth/user-not-found':
                  alert("User not found")
                  break
                case 'auth/wrong-password':
                  alert("Wrong password")
                  break
                default:
                  alert("Something went wrong")
              }
      
              return
            }
      
            commit('SET_USER', auth.currentUser)
      
            router.push('/user')
            alert('login successfull')
          },
//The function that creates a new user
async register ({ commit}, details) {
    const { email, password,name,adress,telephone } = details

   try {
     await createUserWithEmailAndPassword(auth, email, password,name,adress,telephone)
   } catch (error) {
     switch(error.code) {
       case 'auth/email-already-in-use':
         alert("Email already in use")
         break
       case 'auth/invalid-email':
         alert("Invalid email")
         break
       case 'auth/operation-not-allowed':
         alert("Operation not allowed")
         break
       case 'auth/weak-password':
         alert("Weak password")
         break
       default:
         alert("Something went wrong")
     }

     return
   }

   commit('SET_USER', auth.currentUser)

   router.push('/user')
 },
//The function that logs out a user
async logout ({ commit }) {
    await signOut(auth)

    commit('CLEAR_USER')

    router.push('/login')
  },
  //action to fetch current user
  fetchUser({commit}){
    auth.onAuthStateChanged(async user=>{
      if (user === null){
        commit('CLEAR_USER')
      }else{
        commit('SET_USER', user)
        if (router.isReady() && router.currentRoute.value.path === '/login'){
          router.push('/user')
        }
      }
    })
  }
    },
    
})