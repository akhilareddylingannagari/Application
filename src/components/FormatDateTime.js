import moment from 'react-moment';
import 'moment-timezone';

export default {
  name: 'TimeSwitcher',
  props: ['defaultTime', 'offset'],
  data() {
    return {
      activeItem: null,
      timeOffset: this.offset,
      time: null,
      momentDate: null
    };
  },
  beforeCreate() {
    moment.locale('de');
  },
  mounted() {
    if (this.defaultTime) this.setTimeView(this.defaultTime);
  },
  methods: {
    isActive(time) {
      return this.activeItem === time;
    },
    setTimeView(time) {
      this.timeOffset = 0;
      this.activeItem = time;
      this.$emit('changeTimeSpan', time);
    },
    backward() {
      this.timeOffset -= 1;
    },
    forward() {
      if (this.timeOffset === 0) return;
      this.timeOffset += 1;
    }
  },
  computed: {
    selectedTime() {
      // check if user navigated back or forth
      if (this.activeItem === 'day') {
        this.momentDate = moment(new Date()).add(this.timeOffset, 'day');
        if (this.timeOffset === 0) {
          this.time = this.momentDate.format('[Heute], Do MMMM');
        } else {
          this.time = this.momentDate.format('Do MMMM');
        }
      }
      if (this.activeItem === 'week') {
        this.momentDate = moment(new Date())
          .add(this.timeOffset, 'week')
          .startOf('week');
        const startOfWeek = this.momentDate;
        const endOfWeek = moment(new Date())
          .add(this.timeOffset, 'week')
          .endOf('week');

        // check if week is within same month
        if (startOfWeek.format('MMMM') === endOfWeek.format('MMMM')) {
          this.time = `${startOfWeek.format('D')} - ${endOfWeek.format(
            'Do MMMM'
          )}`;
        } else {
          this.time = `${startOfWeek.format('Do MMMM')} - ${endOfWeek.format(
            'Do MMMM'
          )}`;
        }
      }
      if (this.activeItem === 'month') {
        this.momentDate = moment(new Date())
          .add(this.timeOffset, 'month')
          .startOf('month');
        const currentMonth = this.momentDate;
        this.time = currentMonth.format('MMMM YYYY');
      }
      if (this.activeItem === 'year') {
        this.momentDate = moment(new Date())
          .add(this.timeOffset, 'year')
          .startOf('year');
        const currentMonth = this.momentDate;
        this.time = currentMonth.format('YYYY');
      }

      this.$emit('selectedTimeChange', this.momentDate);
      return this.time;
    },
    isToday() {
      return this.timeOffset === 0;
    }
  },
  watch: {
    offset(newVal) {
      if (newVal.direction === 'left') this.forward();
      if (newVal.direction === 'right') this.backward();
    }
  }
};

// WEBPACK FOOTER //
// ./src/components/timeSwitcher/timeSwitcher.js
