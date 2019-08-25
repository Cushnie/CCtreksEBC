<template>
  <div class="gallery">
    <ul>
      <li>
        <img src="../assets/EBCGroup.jpg" alt="We made it!" width="600" height="450" />
      </li>
      <!-- <li>
        <img src="../assets/IMG_7805.JPG" alt="Welcome to Kathmandu" width="600" height="450" />
      </li> -->
      <!-- <li>
        <img src="../assets/IMG_8028.JPG" alt="EBC Panorama"></li> -->
    </ul>

    <ul>
      <li>
        <button>
          <router-link to="/Blog">Blog</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="/Gallery">Pictures</router-link>
        </button>
      </li>
    </ul>
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

ul.gallery {
  list-style-type: none;
  padding: 0;
}

.gallery li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
</style>
</style>
