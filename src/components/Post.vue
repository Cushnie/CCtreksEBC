<template>
  <div class="post">
    <div class="text">Namaste</div>

    <div class="cities"></div>
    <div v-if="blog">
      <!-- <weather :id="blog.from_id"></weather> -->
      <!-- <weather :id="blog.to_id"></weather> -->
    </div>
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
      fromId: "",
      toId: ""

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
};
</script>
