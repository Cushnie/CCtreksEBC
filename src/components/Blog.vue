<template>
  <div class="blog">
    <h3>My Journey</h3>
    <ul>
      <li v-for="blog in blogs">{{ blog }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      blogs: [
        "| Day 1: Sleeping in airports |",
        "| Day 2: Flying across the International Date Line |",
        "| Days 3 & 4: Namaste, Kathmandu |",
        "| Day 4: Gotta go down before you go up |",
        "| Day 5: The long slog up |",
        "| Day 6: We rest & find our breath |",
        "| Day 7: Have Diamox, will trek |",
        "| Day 8: Himalayan sunsets |",
        "| Day 9: Of course it's snowing |",
        "| Day 10: EBC!!! |",
        "| Day 11: The first long day down |",
        "| Day 10: Are we there yet? |",
        "| Day 11: What goes down, must go up |",
        "| Day 12: Waiting in airports |",
        "| Day 13: Spa day & cultural night |",
        "| Day 14: Happy birthday to me |",
        "| Day 15: Welcome to the USA |"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog {
  background: #bbd3df;
    max-height: 750px;
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
