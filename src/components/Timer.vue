<template>
    <div id="timer" class="min-w-full text-center">
      {{ (!_.isNull(timeRemaining)) ? timeRemaining : 'Loading...' }}
    </div>
</template>

<script>
  import { bus } from '../main'
  import moment from 'moment'
  import pluralize from 'pluralize'

  export default {
    name: 'Timer',
    data () {
      return {
        currentTime: null,
        currentTimeMomentInstance: null,
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
      computeTimeLeft () {
        this.currentTimeMomentInstance = moment(this.currentTime.datetime)

        setInterval(() => {
          if (!this._.isNull(this.currentTime)) {

            this.christmasDate = moment(this.currentTimeMomentInstance.year() + "-12-25", "YYYY-MM-DD")
            
            if (this.currentTimeMomentInstance.diff(this.christmasDate) >= 0) {
              this.christmasDate.add(1, 'y')
            }

            this.timeRemaining = this.pluralize('day', this.getRemainingDays()) + 
              this.pluralize('hour', this.getRemainingHours()) + 
              this.pluralize('minute', this.getRemainingMinutes()) + 
              this.pluralize('second', this.getRemainingSeconds()) + 
              'left until christmas'

            this.currentTimeMomentInstance.add(1, 's')
          }
        }, 1000)
      },
      getRemainingDays () {
        return Math.abs(this.currentTimeMomentInstance.diff(this.christmasDate, 'days'))
      }
    }
  }
</script>
