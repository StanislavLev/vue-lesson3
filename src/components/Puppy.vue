<template>
  <a class="puppy-section" :href="storyLink"> 
    <h3>Hi I'm {{name}} and this is my story...</h3>
    <p><img :src="imgURL" alt="puppy image" />{{summary}} </p>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    storyLink: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    imgURL() {
      return 'http://www.placepuppy.net/'+this.index+'p/150/125';
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
h3 {
  text-align: center;
  margin-bottom: 0;
}

img {
  float: left;
  margin: 0 10px 5px 0;
}

p {
  line-height:1.2em;
  height:12em;
  overflow:hidden;
  text-overflow: ellipsis;
}

.puppy-section{
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  padding: 10px;
  width: 300px;
}
</style>