<template>
  <div class="post">
    <div class="title" v-if="blog">
      <h3>{{ blog.title }}</h3>
    </div>

    <div class="cities" v-if="blog">
      <div v-if="blog !== null">
        <ul>
          <li>
            <u>Depart</u>
            <weather v-if="blog" :id="blog.from_city"></weather>
            <weather v-if="blog" :id="blog.from_id"></weather>
          </li>

          <li>
            <u>Arrive</u>
            <weather v-if="blog" :id="blog.to_city"></weather>
            <weather v-if="blog" :id="blog.to_id"></weather>
          </li>
        </ul>

        <weather v-if="blog" :id="blog.entry"></weather>
      </div>
    </div>

    <div class="words" v-if="blog">{{ blog.entry }}</div>

    <table align="center">
      <tr>
        <td>
          <button>
            <router-link to="/Blog">Blog</router-link>
          </button>
        </td>
        <td>
          <button>
            <router-link to="/Gallery">Pictures</router-link>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>


<script>
import Weather from "@/components/Weather";

export default {
  name: "Post",
  components: {
    weather: Weather
  },

  data() {
    return {
      posts: [],
      errors: [],
      blog: null,
      weather: null,
      fromId: "",
      toId: "",
      title: ""
    };
  },

  created: function() {
    this.blog = this.$route.params.blog;
    console.log(this.blog);
  }
};
</script>
<style scoped>
ul.cities {
  list-style-type: none;
  padding: 0;
}

.cities li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
</style>