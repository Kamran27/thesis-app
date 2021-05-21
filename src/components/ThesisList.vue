<template>
  <v-card>
    <v-card-title>
      Abschlussarbeiten
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="theses"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Titel',
            align: 'start',
            sortable: false,
            value: 'titel',
          },
          { text: 'Firma', value: 'firma' },
          { text: 'Professor', value: 'professor' },
          { text: 'Jahr', value: 'jahr' },
        ],
        theses: [
          {
            titel: 'Angebote Vue',
            firma: 'webit!',
            professor: 'Mustermann',
            jahr: 2020,
          },
          {
            titel: 'Etwicklung der Website',
            firma: 'eon',
            professor: 'Musterfrau',
            jahr: 2021,
          },
        ],
      }
    },
  }
</script>