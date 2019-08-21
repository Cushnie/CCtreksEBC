<template>
  <div>
    <div>{{name}}</div>
    <div>{{weatherData}}
<div class="results" v-if="weatherData">
 <p>{{weatherData.main}}</p>
 <p>{{weatherData.temp}}</p>
      
    </div>
</div>


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