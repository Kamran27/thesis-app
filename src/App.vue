<template>
  <v-app>
    <v-app-bar app color="blue">
      <div class="d-flex align-center mr-2">
        Angebote für Abschlussarbeiten
      </div>

      <v-btn to="/theses" text>
        Abschlussarbeiten
      </v-btn>

      <v-btn to="/add" text>
        Admin
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn target="_blank">
        <span class="mr-5">Login</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
  mounted() {
        this.$store.dispatch('loadTheses');
        this.$store.dispatch('loadTags');
    },
};
</script>
