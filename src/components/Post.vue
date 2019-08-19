<template>
  <div class="post">
    <div class="text">Namaste</div>
<div class="entry">
    
    <div v-if="blog">
      <weather :id="blog.from_id"></weather>
      <weather :id="blog.to_id"></weather>
    </div>
    <div class="cities"></div>
  </div>
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
import axios from "axios";
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
      fromId: '',
      toId: ''

    };
  },
  created() {
    this.blog = this.$route.params.blog;
    console.log(this.blog);
    //get first weather
    this.fromId = this.blog.from_id;
    console.log(this.fromId);
    this.toId = this.blog.to_id;
    console.log(this.toId)

    // axios
    //   .get("//api.openweathermap.org/data/2.5/weather", {
    //     params: {
    //       id: this.blog.from_id,
    //       APPID: "883942609bd04e6ecf2a33c7ab270cbb"
    //     }
    //   })
    //   .then(response => {
    //     this.weather = response.data;
    //     console.log(this.weather);
    //   })
    //   .catch(e => {
    //     this.errors.push(e);
    //   });
    // axios
    //   .get("//api.openweathermap.org/data/2.5/weather", {
    //     params: {
    //       id: this.blog.to_id,
    //       APPID: "883942609bd04e6ecf2a33c7ab270cbb"
    //     }
    //   })
    //   .then(response => {
    //     this.weather = response.data;
    //     console.log(this.weather);
    //   })
    //   .catch(e => {
    //     this.errors.push(e);
    //   });
  }
}
</script>
