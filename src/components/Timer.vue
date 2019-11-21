<template>
    <div id="timer" class="min-w-full text-center">
      {{ (!_.isNull(timeRemaining)) ? timeRemaining : 'Loading...' }}
    </div>
</template>

<script>
  import { bus } from '../main'
  import moment from 'moment'

  export default {
    name: 'Timer',
    props: {
      time: Object
    },
    data () {
      return {
        currentTime: null,
        christmasDate: null,
        timeRemaining: null
      }
    },
    mounted () {
      bus.$on('time-updated', time => {
        this.currentTime = time
        this.computeTimeLeft()
      })
    },
    methods: {
      init () {
        this.computeTimeLeft()
      },
      computeTimeLeft () {
        if (!this._.isNull(this.time)) {
          this.currentTime = moment(this.time.formatted, "YYYY-MM-DD HH:mm:ss")

          this.christmasDate = moment(this.currentTime.year() + "-12-25", "YYYY-MM-DD")
          
          if (this.currentTime.diff(this.christmasDate) >= 0) {
            this.christmasDate.add(1, 'y')
          }

          this.timeRemaining = this.getRemainingDays() + ' days left until christmas'
        }
      },
      getRemainingDays () {
        return Math.abs(this.currentTime.diff(this.christmasDate, 'days'))
      }
    }
  }
</script>
