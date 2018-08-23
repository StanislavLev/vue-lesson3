<template>
  <div>
    <button id="sortByNameBtn" @click="sortByName">
      <h4>
        Sort Stories by <br/> Teller's Name
        <span class="arrowAndX" v-show="sortedByName">
          <span class="cancelBtn" @click.stop="cancelSortByName"><big>	&#x2718; </big></span>
          <span class="arrowUp" v-show="namesAtoZ"> &#x25b2;</span>
          <span class="arrowDn" v-show="!namesAtoZ">  &#x25bc;</span>
        </span>
      </h4>
    </button>
    <button disabled>
      <h4>Sort Stories by <br/> Rating </h4>
    </button>
    <button disabled>
      <h4>Sort Stories by <br/> Date </h4>
    </button>
    <button disabled>
      <h4>Sort Stories by <br/> Title </h4>
    </button>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      sortedByName: false,
      namesAtoZ: true 
    };
  },
  methods: {
    sortByName(){
      this.sortedByName?(this.namesAtoZ = !this.namesAtoZ):(this.sortedByName = true);
      this.$emit('sortByName', this.namesAtoZ);
    },
    cancelSortByName(){
      this.sortedByName = false;
      this.namesAtoZ = true;
      this.$emit('cancelSortByName');
    }
  }
}
</script>

<style scoped>

button {
  position: relative;
  width: 25%;
}

.cancelBtn{
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
</style>