import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './components/firebaseConfig'
import store from './store'
import router from './routes'
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrashAlt, faEdit);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);

firebase.initializeApp(firebaseConfig)
firebase.analytics();

new Vue({
   router,
   store,
   render: h => h(App),
}).$mount('#app')
