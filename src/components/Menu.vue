<template>
  <v-navigation-drawer v-model="menuOpen" app>
    <v-list dense>
      <v-list-item to="/" link>
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Мои встречи </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/user" link>
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <router-link
            class="text-decoration-none button black--text"
            to="/user"
          >
            <v-list-item-title>Профиль</v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    menuOpen: {
      get() {
        return this.$store.state.menuOpen;
      },
      set(isOpen) {
        this.$store.commit("setMenu", isOpen);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
