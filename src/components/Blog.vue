<template>
  <div class="blog">
    <h3>My Journey</h3>
    <ul>
      <li v-for="(blog,index) in blogs" :key="index">
        <button v-on:click="getPost(blog)">{{ blog.title }}</button>
      </li>
    </ul>

    <!-- Router Links -->
    <div class="container">
      <div class="card border-0 shadow">
        <div class="card-body text-center">
          <h5 class="card-title mb-0">
            <router-link to="/Gallery">Pictures</router-link>
          </h5>
          <div class="card-text text-black-50">see the sights</div>
        </div>
      </div>

      <div class="card border-0 shadow">
        <div class="card-body text-center">
          <h5 class="card-title mb-0">
            <router-link to="/">Home</router-link>
          </h5>
          <div class="card-text text-black-50">Go back to the beginning</div>
        </div>
      </div>
    </div>
    <!-- End Router Links -->
  </div>
</template>

<script>
import blogs from "../blog.js";

export default {
  name: "Blog",
  data() {
    return {
      blogs: blogs
    };
  },
  methods: {
    getPost: function(blog) {
      console.log(blog);
      this.$router.push({ name: "Blog", params: { blog } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog {
  background: #ffffff;
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
  color: #000000;
}
</style>
