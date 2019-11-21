<template>
  <div id="app">
    <div class="container mx-auto h-screen">
      <div class="flex flex-wrap min-h-full items-center">
        <timer/>
      </div>
    </div>
  </div>
</template>

<script>
  import { bus } from './main'
  import Axios from 'axios'
  import Timer from './components/Timer'

  export default {
    name: 'app',
    components: {
      Timer
    },
    data() {
      return {
        currentTime: null
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
