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
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      show-expand
      class="elevation-1"
    >
   
     <template v-slot:top>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-switch
          v-model="singleExpand"
          label="Single expand"
          class="mt-2"
        ></v-switch>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers }">
      <td :colspan="headers.length">
         <div>
            <h1>Hello from the other side!</h1>
            <h3>ekvmlefvm</h3>
          </div>
        Hier kommt dann detailansicht und Button PDF-Erstellen
      </td>
    </template>
    
    </v-data-table>
  </v-card>
</template>

<script>

//import Api from '@/service/api';
import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(['theses','tags'])
    },
    data () {
      return {
        expanded: [],
        singleExpand: false,
        search: '',
        headers: [
          { text: 'Titel', align: 'start',csortable: false, value: 'titel'},
          { text: 'Firma', value: 'firma' },
          { text: 'Professor', value: 'professor' },
          { text: 'Jahr', value: 'jahr' },
          { text: '', value: 'data-table-expand' },
        ],
       //theses: this.$store.state.theses,
       
      }
    },
  }
</script>