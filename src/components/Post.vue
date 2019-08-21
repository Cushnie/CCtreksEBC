<template>
  <div class="post">
    <div class="cities">
      <!-- <div v-if="blog !== null"> -->
        
      <weather v-if="blog" :id="blog.from_id"></weather>
      <weather v-if="blog" :id="blog.to_id"></weather>
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
