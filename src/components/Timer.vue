<template>
    <div id="timer" class="flex flex-wrap min-w-full text-center justify-center text-6xl">
        <div class="rounded-lg bg-red-200 shadow-2xl m-4 py-2 px-6 text-red-600"><p class="font-extrabold">{{ !_.isNull(timeRemaining.days) ? timeRemaining.days : '00' }}</p><p class="text-sm">Days</p></div>
        <div class="rounded-lg bg-red-200 shadow-2xl m-4 py-2 px-6 text-red-600"><p class="font-extrabold">{{ !_.isNull(timeRemaining.hours) ? timeRemaining.hours : '00' }}</p><p class="text-sm">Hours</p></div>
        <div class="rounded-lg bg-red-200 shadow-2xl m-4 py-2 px-6 text-red-600"><p class="font-extrabold">{{ !_.isNull(timeRemaining.minutes) ? timeRemaining.minutes : '00' }}</p><p class="text-sm">Minutes</p></div>
        <div class="rounded-lg bg-red-200 shadow-2xl m-4 py-2 px-6 text-red-600"><p class="font-extrabold">{{ !_.isNull(timeRemaining.seconds) ? timeRemaining.seconds : '00' }}</p><p class="text-sm">Seconds</p></div>
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
        timeRemaining: {
          days: null,
          hours: null,
          minutes: null,
          seconds: null
        }
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

            this.timeRemaining = {
              days: this._.padStart(this.getRemainingDays(), 2, '0'),
              hours: this._.padStart(this.getRemainingHours(), 2, '0'),
              minutes: this._.padStart(this.getRemainingMinutes(), 2, '0'),
              seconds: this._.padStart(this.getRemainingSeconds(), 2, '0')
            }


            this.currentTimeMomentInstance.add(1, 's')
          }
        }, 1000)
      },
      getRemainingDays () {
        return Math.abs(this.currentTimeMomentInstance.diff(this.christmasDate, 'days'))
      },
      getRemainingHours () {
        return Math.floor((Math.abs(this.currentTimeMomentInstance.diff(this.christmasDate)) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      },
      getRemainingMinutes () {
        return Math.floor((Math.abs(this.currentTimeMomentInstance.diff(this.christmasDate)) % (1000 * 60 * 60)) / (1000 * 60))
      },
      getRemainingSeconds () {
        return Math.floor((Math.abs(this.currentTimeMomentInstance.diff(this.christmasDate)) % (1000 * 60))/ 1000)
      },
      pluralize(word, quantity) {
        return this._.padStart(quantity, 2, '0') + ' ' + pluralize(word, quantity) + ' '
      }
    }
  }
</script>
