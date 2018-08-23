<template>
  <div>
    <button @click="sortByName">
      <h4>
        Sort Stories by <br/> Teller's Name
        <span v-show="sortedByName">
          <span v-show="!reversed"> &#x25b2; </span>
          <span v-show="reversed">  &#x25bc; </span>
          <span class="cancelBtn" @click.stop="cancelSortByName"><big>	&#x2718; </big></span>
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
      reversed: false 
    };
  },
  methods: {
    sortByName(){
      this.sortedByName?(this.reversed = !this.reversed):(this.sortedByName = true);
      this.$emit('sortByName', this.reversed);
    },
    cancelSortByName(){
      this.sortedByName = false;
      this.reversed = false;
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