<template>
  <div class="post">
    <div class="text">Namaste</div>

    <div class="cities"></div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "post",
  props: {
      default: true, nav:true
  },
  
  data() {
    return {
      posts: [],
      errors: []
    };
  },
  created() {
   console.log(this.info)

//    axios
//       .get(`api.openweathermap.org/data/2.5/weather?id=1283113`)
//       .then(response => {
//         this.id = response.data;
//       })
//       .catch(e => {
//         this.errors.push(e);
//       });
  }
};
</script>
