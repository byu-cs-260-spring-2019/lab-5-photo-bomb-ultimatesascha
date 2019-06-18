import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


var firebaseConfig = {
  apiKey: "AIzaSyD0u-t3kS2KTOrvBzXy_ksUfADZHXHeec4",
  authDomain: "cs260projectsvogel.firebaseapp.com",
  databaseURL: "https://cs260projectsvogel.firebaseio.com",
  projectId: "cs260projectsvogel",
  storageBucket: "cs260projectsvogel.appspot.com",
  messagingSenderId: "205970843817",
  appId: "1:205970843817:web:4ae3576b9c4d3312"
};

firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser', user);
  }
  else {
    store.commit('setUser', null);
  }
});

