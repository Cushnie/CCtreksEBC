<template>
  <div class="hello">
    <h5>In April 2018, I was part of the inaugural Climb2Cure team to go to Everest Base Camp (EBC) in the Nepalese Himalayas. It was an amazing experience and definitely one of the hardest things I've ever done. But the experience was truly a once in a lifetime experience and it definitely took my breath away in more ways than one.</h5>

    <header>
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/298204030"
        width="640"
        height="360"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </header>

    <div class="container">
      <!-- <div class="col-xl-3 col-md-6 mb-4"> -->
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
          <div class="card-text text-black-50">See the sights</div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header .container {
  position: relative;
  z-index: 2;
}

@media (pointer: coarse) and (hover: none) {
  header {
    background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black
      no-repeat center center scroll;
  }
  header video {
    display: none;
  }
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
