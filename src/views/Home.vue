<template>
  <div>
    <v-main>
      <MeetingsList />
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import MeetingsList from "../components/MeetingsList";

export default {
  name: "Home",
  components: { MeetingsList },
};
</script>
