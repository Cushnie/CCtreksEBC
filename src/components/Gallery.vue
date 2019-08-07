<template>
  <div class="gallery">
    <div class="container">
      <hr class="mt-2 mb-5" />
      <div class="row text-center text-lg-left">
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/aob0ukAYfuI/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/EUfxH-pze7s/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/M185_qYH8vg/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/sesveuG_rNo/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/2gYsZUmockw/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/8mUEy0ABdNE/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/G9Rfc1qccH4/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/aJeH0KcFkuc/400x300"
              alt
            />
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"
              alt
            />
          </a>
        </div>
      </div>
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
export default {
  name: "Gallery",
  data() {
    return {
      pictures: [
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |",
        "| pic |"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery {
  background: #000000;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000000;
}
</style>
