<template>
  <div>
    <div>{{id}}</div>
    <div>{{weatherData}}</div>
    <h3>What's up in the sky?</h3>
    <!-- <dl>
      <dt v-if="weatherData !== null">Current Temp</dt>
      <dd >{{ weatherData.temp }}&deg;F</dd>
      
      <dt>Humidity</dt>
      <dd>{{ weatherData.humidity }}%</dd>
      
      <dt>High</dt>
      <dd>{{ weatherData.temp_max }}&deg;F</dd>
      
      <dt>Low</dt>
      <dd>{{ weatherData.temp_min }}&deg;F</dd>
    </dl> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Weather",
  data() {
    return {
      weatherData: null
    };
  },

  created: function() {
    axios
      .get("//api.openweathermap.org/data/2.5/weather", {
        params: {
          id: this.id,
          APPID: "883942609bd04e6ecf2a33c7ab270cbb"
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