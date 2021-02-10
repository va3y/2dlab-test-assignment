<template>
  <v-app>
    <Header />
    <Menu />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
export default {
  name: "App",

  components: { Header, Menu },

  data: () => ({
    //
  }),
};
</script>
