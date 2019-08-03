<template>
  <div class="component">
    <h2>{{ message }}</h2>
    <h4>{{ weather }}</h4>
  </div>



  
</template>

<script>
import {API} from '@/common/api.js';

export default {
  name: 'CitySearch',
  data () {
    return {
      results: null,
      errors: [],
      query: ''
    }
  },
  methods: {
    getCities: function () {
      API.get('find', {
        params: {
            q: this.query,
            units: 'imperial'
        }
      })
      .then(response => {
        this.results = response.data
      })
      .catch(error => {
        this.errors.push(error)
      });
    }
  }
}
</script>

<style scoped>
.component {
  background: #e8e8e8;
  min-height: 400px;
}
</style>