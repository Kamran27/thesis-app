<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        Angebote für Abschlussarbeiten
      </div>

      <v-btn to="/theses" text>
        Abschlussarbeiten
      </v-btn>

      <v-btn to="/add" text>
        Admin
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
};
</script>
