<template>
  <v-app-bar app color="primary" dark>
    <v-btn icon>
      <v-icon @click.stop="toggleMenu">mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <span class="mr-2">{{ getEmail }}</span>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    getEmail() {
      return this.$store.state.user.email;
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
  },
};
</script>

<style scoped></style>
