<template>
  <div class="gallery">
    <h3>Photos of my trek</h3>
    <ul>
      <li v-for="pic in pictures">{{ pic }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      pictures: [
        "| pic |", 
        "| pic |",
        "| pic |",        
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery {
  background: #000000;
  max-height: 500px;
  }

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
