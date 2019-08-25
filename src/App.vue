<template>
  <div id="app">
    <h1><router-link to="/" >Colleen Treks EBC</router-link></h1>

    <router-view />
  </div>
</template>


<script>

export default {
  name: 'app'
};
</script>

<style>
#app {
  font-family: Calibri, "Trebuchet MS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>