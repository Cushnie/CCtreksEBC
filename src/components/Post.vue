<template>
  <div class="post">
    <div class="text">Namaste</div>

    <div class="cities"></div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Post",
  data () {
    return {
      posts: [],
      errors: [],
      blog: null,
      weather: null
    };
  },
  created () {
    this.blog = this.$route.params.blog
    console.log(this.blog)

    //get first weather
    let fromId = this.blog.from_id
    console.log(fromId)

    axios
      .get('//api.openweathermap.org/data/2.5/weather?id=2172797', {        params: {
          id: this.blog.from_id,
          APPID: 'YOUR WEATHER KEY HERE'
        }
      })
      .then(response => {
        this.weather = response.data;
        console.log(this.weather)
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>
