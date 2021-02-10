<template>
  <v-card class="pa-2 align-stretch" max-width="400" elevation="4">
    <v-card-title>Информация о встрече</v-card-title>
    <v-card-text>
      <div>{{ meetingData.meeting_name }}</div>
      <div>Дата: {{ meetingData.start_datetime }}</div>
      <div>Длительность: {{ meetingData.duration }} мин.</div>
      <div>Максимальное число участников: {{ meetingData.max_attendance }}</div>
    </v-card-text></v-card
  >
</template>

<script>
export default {
  props: {
    meetingData: {
      type: Object,
      default: () => {
        "error";
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
