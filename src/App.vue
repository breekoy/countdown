<template>
  <div id="app">
    <div class="container mx-auto h-screen">
      <div class="flex flex-wrap min-h-full items-center">
        <timer/>
      </div>
    </div>
    <x-particles class="particles-background" :config="particleConfig"/>
  </div>
</template>

<script>
  import { bus } from './main'
  import Axios from 'axios'
  import Timer from './components/Timer'
  import particleConfig from './config/particles'

  export default {
    name: 'app',
    components: {
      Timer
    },
    data() {
      return {
        currentTime: null,
        particleConfig: particleConfig
      }
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        Axios.get('https://worldtimeapi.org/api/ip')
          .then(response => {
            this.currentTime = response.data
            bus.$emit('time-updated', this.currentTime)
          })
      }
    }
  }
</script>

<style scoped>
  .particles-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
  }
</style>