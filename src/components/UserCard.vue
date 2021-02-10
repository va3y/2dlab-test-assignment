<template>
  <v-card class="mx-auto my-8 pa-4" max-width="500">
    <v-card-title> Информация о пользователе</v-card-title>

    <v-card-text>
      <div>Имя: {{ getUserData.name }}</div>
      <div>Фамилия: {{ getUserData.surname }}</div>
      <div>E-mail: {{ getUserData.email }}</div>
      <div>Токен: {{ getUserData.token }}</div></v-card-text
    >
    <div></div>
  </v-card>
</template>

<script>
export default {
  computed: {
    getUserData() {
      return this.$store.state.user;
    },
  },
};
</script>
