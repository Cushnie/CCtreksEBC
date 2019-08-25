<template>
  <div>
    <b>{{weatherData.name}}, {{weatherData.sys.country}}</b>
    <p></p>
    Current temperature: {{weatherData.main.temp}}&#8457;
    <!-- <p></p>
    img.icon(v-bind:src="'https://openweathermap.org/img/wn/' + {{weatherData.weather.icon}} + '.png'" -->
    <p></p>
    {{weatherData.weather.main}}
    Low: {{weatherData.main.temp_min}}&#8457; High: {{weatherData.main.temp_max}}&#8457;
    <p></p>
    Lat: {{weatherData.coord.lat}}&#176; Lon: {{weatherData.coord.lon}}&#176;
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Weather",
  data() {
    return {
      weatherData: null,
      errors: []
    };
  },

  created: function() {
    axios
      .get("//api.openweathermap.org/data/2.5/weather", {
        params: {
          id: this.id,
          APPID: "883942609bd04e6ecf2a33c7ab270cbb",
          units: "imperial"
        }
      })
      .then(response => {
        this.weatherData = response.data;
        console.log(this.weatherData);
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  props: {
    id: String
  }
};
</script>

<style scoped>
dl {
  padding: 5px;
  background: #e8e8e8;
}
dt {
  float: left;
  clear: left;
  width: 120px;
  text-align: right;
  font-weight: bold;
  color: blue;
}
dd {
  margin: 0 0 0 130px;
  padding: 0 0 0.5em 0;
}
dt::after {
  content: ":";
}
</style> 