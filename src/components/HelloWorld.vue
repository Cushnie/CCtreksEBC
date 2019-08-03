<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>In April 2018, I was part of the inaugural Climb2Cure team to go to Everest Base Camp (EBC) in the Nepalese Himalayas. It was an amazing experience and definitely one of the hardest things I've ever done. But the experience was truly a once in a lifetime experience and it definitely took my breath away in more ways than one.</p>
    <h3>My Journey</h3>
    <ul>
      <li>Day 1 - Lukla to Phakding</li>
      <li>Day2 - Phakding to Namche Bazaar</li>
      <li>Day 3 - We rest & find our breath</li>
      <li>Day 4 - Namche Bazaar to Tengboche</li>
      <li>Day 5 - Tengboche to Dingboche</li>
      <li>Day 6 - Dingboche to Lobuche</li>
      <li>Day 7 - EBC</li>
      <li>Day 8 - Gorak Shep to Pheriche</li>
      <li>Day 9 - Pheriche to Namche Bazaar</li>
      <li>Day 10 - Namche Bazaar to Lukla</li>
      <li>Day 11 - Back to Kathmandu</li>
    </ul>
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
  color: #42b983;
}
</style>
