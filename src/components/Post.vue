<template>
  <div class="post">
    <div class="cities" v-if="blog">
      <!-- <div v-if="blog !== null"> -->
      <h2>
        <weather v-if="blog" :id="blog.title"></weather>
      </h2>
      <h5>
        <weather v-if="blog" :id="blog.from_city"></weather>
        <weather v-if="blog" :id="blog.from_id"></weather>

        <p></p>
        <weather v-if="blog" :id="blog.to_city"></weather>
        <weather v-if="blog" :id="blog.to_id"></weather>
      </h5>
      <p>
        <weather v-if="blog" :id="blog.entry"></weather>
      </p>

      <!-- </div> -->
    </div>
    <div class="entry"></div>
    <!-- Router Links -->
    <div class="container">
      <div class="card border-0 shadow">
        <div class="card-body text-center">
          <h5 class="card-title mb-0">
            <router-link to="/Blog">Blog</router-link>
          </h5>
          <div class="card-text text-black-50">Read about my adventures</div>
        </div>
      </div>
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
      toId: ""
    };
  },

  created: function() {
    this.blog = this.$route.params.blog;
    console.log(this.blog);
  }
};
</script>
