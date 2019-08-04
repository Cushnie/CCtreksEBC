<template>
  <div id="app">
    <h1>Colleen Treks EBC</h1>

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
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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