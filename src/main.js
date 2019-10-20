import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp(
  {
    apiKey: "AIzaSyC5RyjZJ9V4s9rmm8eM-c7YoXPMfcfxeC0",
    authDomain: "vue-calendar-d93ba.firebaseapp.com",
    databaseURL: "https://vue-calendar-d93ba.firebaseio.com",
    projectId: "vue-calendar-d93ba",
    storageBucket: "vue-calendar-d93ba.appspot.com",
    messagingSenderId: "642739723561",
    appId: "1:642739723561:web:9e08eff5dfde6691036b38",
    measurementId: "G-ZVJVMHSC6X"
  }
);
export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
