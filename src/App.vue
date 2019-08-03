<template>
  <div id="app">
    <img alt="EBC" src="./assets/EBCGroup.jpg" width="640" height="420">
    <HelloWorld msg="Namaste!"/>
    <Blog/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Blog from './components/Blog.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Blog
  }
}
</script>

<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
