<template>
  <header class="header">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">PWA TODO LIST</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav right>
              <span style="color: wheat; margin: 8px 20px;" v-if="isLoggedIn">{{currentUser}}</span>
              <b-link class="nav-link" to="/" v-if="isLoggedIn">Dashboard</b-link>
              <b-link class="nav-link" to="/about" v-if="isLoggedIn">About</b-link>
              <b-link class="nav-link" to="/login" v-if="!isLoggedIn">Login</b-link>
              <b-link class="nav-link" to="/register" v-if="!isLoggedIn">Register</b-link>
              <button class="btn btn-secondary" @click="signOut" v-if="isLoggedIn">Signout</button>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>


<script>
import firebase from "firebase";
export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(data => {
          console.log("signOut data", data);
          this.$router.replace({ name: "Login" });
        });
    }
  }
};
</script>