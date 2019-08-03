<template>
  <div id="app">

  <HelloWorld msg="Namaste!"/>
<Blog />
    
    <Gallery />

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Blog from './components/Blog.vue'
import Gallery from './components/Gallery'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Blog,
    Gallery
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
