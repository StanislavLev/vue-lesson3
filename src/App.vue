<template>
  <div id="app-root">
    <header><h1>{{title}}</h1></header>
    <div class="puppy-name-grid">
      <puppy v-for="(puppy, index) in puppies" :name="puppy.name" :summary="puppy.summary" :index="index+1" :storyLink="puppy.storyLink" :key="index"></puppy>
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
      puppies: [
        { 
          name: 'Lucy',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          storyLink: '#linkToStory1'
        },
        { 
          name: 'Rocky',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          storyLink: '#linkToStory2'
        },
        { 
          name: 'Daisy',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          storyLink: '#linkToStory3'
       },
        { 
          name: 'Buddy',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          storyLink: '#linkToStory4'
        },
        { 
          name: 'Lola',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          storyLink: '#linkToStory5'
        },
        { 
          name: 'Luna',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          storyLink: '#linkToStory6'
        },
        { 
          name: 'Bear',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          storyLink: '#linkToStory7'
        },
        { 
          name: 'Duke',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          storyLink: '#linkToStory8'
        },
        { 
          name: 'Sophie',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          storyLink: '#linkToStory9'
        },
        { 
          name: 'Tucker',
          summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          storyLink: '#linkToStory10'
        }
      ]
    }
  }
}
</script>
