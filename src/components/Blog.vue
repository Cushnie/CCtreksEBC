<template>
  <div class="blog">
    <h3>My Journey</h3>
    <div class="pano">
      <img src="../assets/IMG8028.jpg" class="img-fluid" />
    </div>
    <p></p>
    <div class="days">
      <ul>
        <li v-for="(blog,index) in blogs" :key="index">
          <button v-on:click="getPost(blog)">{{ blog.title }}</button>
        </li>
      </ul>
    </div>
    <div class="button">
      <ul>
        <li>
          <button>
            <router-link to="/Gallery">Pictures</router-link>
          </button>
        </li>

        <li>
          <button>
            <router-link to="/">Home</router-link>
          </button>
        </li>
      </ul>
    </div>
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
      this.$router.push({ name: "Post", params: { blog } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog {
  background: #ffffff;
}
ul.button {
  list-style-type: none;
  padding: 0;
}
.button li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
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
