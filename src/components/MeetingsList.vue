<template>
  <v-expansion-panels class="pa-md-16">
    <v-expansion-panel v-for="(meeting, index) in getMeetings" :key="index">
      <v-expansion-panel-header>{{
        meeting.meeting_name
      }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="d-md-flex">
          <MeetingInfo :meeting-data="meeting" />
          <MeetingGraph
            class="ml-md-4 mt-4 mt-md-0"
            :meeting-attendance="meeting.attendance"
          />
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import MeetingInfo from "./MeetingInfo";
import MeetingGraph from "./MeetingGraph";

export default {
  components: {
    MeetingInfo,
    MeetingGraph,
  },
  computed: {
    getMeetings() {
      return this.$store.state.meetings;
    },
  },
};
</script>

<style lang="scss" scoped></style>
