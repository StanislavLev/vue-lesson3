<template>
  <div id="app-root">
    <header><h1>{{title}}</h1></header>
    <sortsection v-on:sortByName="sortPuppiesByName($event)"></sortsection>
    <div id="puppy-card-grid">
      <puppy v-for="(puppy, index) in puppies" :name="puppy.name" :summary="puppy.summary" :imgLink="puppy.imgLink" :storyLink="puppy.storyLink" :key="index"></puppy>
    </div>
  </div>
</template>

<script>

import Puppy          from './components/Puppy.vue';
import SortSection from './components/SortSection.vue'


export default {
  components: {
    'puppy'       : Puppy,
    'sortsection' : SortSection
  },
  data() {
    return {
      title: "Puppy Story Tellers!",
      puppies: [
        { 
          id: 1,
          name: 'Lucy',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory1',
          imgLink: 'http://www.placepuppy.net/1p/150/125'
        },
        { 
          id: 2,
          name: 'Rocky',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory2',
          imgLink: 'http://www.placepuppy.net/2p/150/125'
        },
        {
          id: 3,        
          name: 'Daisy',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory3',
          imgLink: 'http://www.placepuppy.net/3p/150/125'
        },
        { 
          id: 4,
          name: 'Buddy',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory4',
          imgLink: 'http://www.placepuppy.net/4p/150/125'
        },
        { 
          id: 5,
          name: 'Lola',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory5',
          imgLink: 'http://www.placepuppy.net/5p/150/125'
        },
        { 
          id: 6,
          name: 'Luna',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory6',
          imgLink: 'http://www.placepuppy.net/6p/150/125'
        },
        { 
          id: 7,
          name: 'Bear',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory7',
          imgLink: 'http://www.placepuppy.net/7p/150/125'
        },
        { 
          id: 8,
          name: 'Duke',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory8',
          imgLink: 'http://www.placepuppy.net/8p/150/125'
        },
        { 
          id: 9,
          name: 'Sophie',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory9',
          imgLink: 'http://www.placepuppy.net/9p/150/125'
        },
        { 
          id: 10,
          name: 'Tucker',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip consequat...',
          storyLink: '#linkToStory10',
          imgLink: 'http://www.placepuppy.net/10p/150/125'
        }
      ],
    };
  },
  methods: {
    sortPuppiesByName(reversed){
      console.log(reversed);
      if(!reversed) {
        return this.puppies.sort(function(a, b){return (a.name > b.name)?1:((a.name < b.name)?-1:0);});
      }
      else {
        return this.puppies.sort(function(a, b){return (a.name < b.name)?1:((a.name > b.name)?-1:0);});
      }
    }
  }
}
</script>
