<template>
  <div id="app-root">
    <header><h1>{{title}}</h1></header>
    <select v-model="sortOrder">
      <option value="">    Original order                   </option>
      <option value="AtoZ">Sort Stories by Teller's name A-Z</option>
      <option value="ZtoA">Sort Stories by Teller's name Z-A</option>
    </select>
    <div class="puppy-name-grid">
      <puppy v-for="(puppy, index) in sortedPuppiesArr" :name="puppy.name" :summary="puppy.summary" :imgLink="puppy.imgLink" :storyLink="puppy.storyLink" :key="index"></puppy>
    </div>
  </div>
</template>

<script>

import Puppy from './components/Puppy.vue'

export default {
  components: {
    'puppy': Puppy
  },
  data() {
    return {
      title: "Puppy Story Tellers!",
      sortOrder: '',
      puppies: [
        { 
          name: 'Lucy',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory1',
          imgLink: 'http://www.placepuppy.net/1p/150/125'
        },
        { 
          name: 'Rocky',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory2',
          imgLink: 'http://www.placepuppy.net/2p/150/125'
        },
        { 
          name: 'Daisy',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory3',
          imgLink: 'http://www.placepuppy.net/3p/150/125'
       },
        { 
          name: 'Buddy',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory4',
          imgLink: 'http://www.placepuppy.net/4p/150/125'
        },
        { 
          name: 'Lola',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory5',
          imgLink: 'http://www.placepuppy.net/5p/150/125'
        },
        { 
          name: 'Luna',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory6',
          imgLink: 'http://www.placepuppy.net/6p/150/125'
        },
        { 
          name: 'Bear',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory7',
          imgLink: 'http://www.placepuppy.net/7p/150/125'
        },
        { 
          name: 'Duke',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory8',
          imgLink: 'http://www.placepuppy.net/8p/150/125'
        },
        { 
          name: 'Sophie',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory9',
          imgLink: 'http://www.placepuppy.net/9p/150/125'
        },
        { 
          name: 'Tucker',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory10',
          imgLink: 'http://www.placepuppy.net/10p/150/125'
        }
      ]
    }
  },
  computed: {
    sortedPuppiesArr(){
      let notSortedArr = this.puppies.slice(0);
      if(this.sortOrder === 'AtoZ') {
        return notSortedArr.sort(function(a, b){return (a.name > b.name)?1:((a.name < b.name)?-1:0);});
      }
      else if(this.sortOrder === 'ZtoA') {
        return notSortedArr.sort(function(a, b){return (a.name < b.name)?1:((a.name > b.name)?-1:0);});
      }
      else {
        return this.puppies;
      }
    }
  }
}
</script>
