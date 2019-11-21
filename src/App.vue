<template>
  <div id="app">
    <div class="container mx-auto h-screen">
      <div class="flex flex-wrap min-h-full items-center">
        <timer :time="currentTime"/>
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
        // Axios.get('https://api.timezonedb.com/v2.1/get-time-zone?key=44QN6ASGVSEB&format=json&by=zone&zone=Asia/Manila')
        //   .then(response => {
        //     this.currentTime = response.data
            bus.$emit('time-updated', this.currentTime)

        this.currentTime = {
          status:"OK",
          message:"",
          countryCode:"PH",
          countryName:"Philippines",
          zoneName:"Asia/Manila",
          abbreviation:"PHT",
          gmtOffset:28800,
          dst:"0",
          zoneStart:275151600,
          zoneEnd:null,
          nextAbbreviation:null,
          timestamp:1574285150,
          formatted:"2019-11-20 21:25:50"
        }
      }
    }
  }
</script>
