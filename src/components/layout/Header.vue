<template>
  <header class="header">
    <h1 class="logo">
      <a href="#">PWA Todo List</a>
    </h1>
    <ul class="main-nav">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/about">About</router-link>

      <button class="btn" @click="signOut">Signout</button>
    </ul>
  </header>
</template>


<script>
import firebase from "firebase";
export default {
  name: "Header",
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


<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  line-height: 1;
  margin: 0;
  min-height: 100vh;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

h2,
h3,
a {
  color: #34495e;
}

a {
  text-decoration: none;
}

.logo {
  margin: 0;
  font-size: 1.45em;
}

.main-nav {
  margin-top: 5px;
}

.logo a,
.main-nav a {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
}

.main-nav a {
  color: #34495e;
  font-size: 0.99em;
}

.main-nav a:hover {
  color: #718daa;
}

.header {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border: 1px solid #a2a2a2;
  background-color: #f4f4f4;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  /* -webkit-border-radius: 5px; */
  /* -moz-border-radius: 5px; */
  /* border-radius: 5px; */
}

.btn {
  display: inline-block;
  background: var(--light-color);
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  margin-right: 0.2rem;
  background: rgb(100, 100, 0);
  color: #fff;
}

/* =================================
  Media Queries
==================================== */
@media (min-width: 769px) {
  .header,
  .main-nav {
    display: flex;
  }

  .header {
    flex-direction: column;
    align-items: center;

    /* .header {
      width: 80%;
      margin: 0 auto;
      max-width: 1150px;
    } */
  }
}

@media (min-width: 1025px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>