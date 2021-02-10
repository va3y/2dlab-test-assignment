<template>
  <v-card elevation="4" class="pa-md-4">
    <v-card-title>Пользователи встречи</v-card-title>
    <div class="">
      <!-- <v-sparkline auto-draw smooth="5" :value="getValue" :labels="getLabels">
      </v-sparkline> -->
      <LineChart max-width="800" :data="prepareData" />
    </div>
  </v-card>
</template>

<script>
import LineChart from "./LineChart";
export default {
  components: {
    LineChart,
  },
  props: {
    meetingAttendance: {
      type: Array,
      default: () => ["error!"],
    },
  },
  computed: {
    getValue() {
      return this.meetingAttendance.map((i) => {
        return i.cnt_people;
      });
    },
    getLabels() {
      return this.meetingAttendance.map((i) => {
        return i.time + "";
      });
    },
    prepareData() {
      const labels = this.meetingAttendance.map((el) => {
        return el.time;
      });
      const data = this.meetingAttendance.map((el) => {
        return el.cnt_people;
      });
      const output = {
        labels,
        datasets: [{ label: "пользователей", data, borderWidth: 1 }],
      };
      return output;
    },
  },
};
</script>

<style lang="scss" scoped></style>
