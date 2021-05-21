<template>
  <div v-if="currentThesis" class="edit-form py-3">
    <p class="headline">Edit Thesis</p>

    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="currentThesis.title"
        :rules="[(v) => !!v || 'Title is required']"
        label="Title"
        required
      ></v-text-field>

      <v-text-field
        v-model="currentThesis.firma"
        :rules="[(v) => !!v || 'Firma is required']"
        label="Firma"
        required
      ></v-text-field>

      <label><strong>Status:</strong></label>
      {{ currentThesis.published ? "Published" : "Pending" }}

      <v-divider class="my-5"></v-divider>

      <v-btn v-if="currentThesis.published"
        @click="updatePublished(false)"
        color="primary" small class="mr-2"
      >
        UnPublish
      </v-btn>

      <v-btn v-else
        @click="updatePublished(true)"
        color="primary" small class="mr-2"
      >
        Publish
      </v-btn>

      <v-btn color="error" small class="mr-2" @click="deleteThesis">
        Delete
      </v-btn>

      <v-btn color="success" small @click="updateThesis">
        Update
      </v-btn>
    </v-form>

    <p class="mt-3">{{ message }}</p>
  </div>

  <div v-else>
    <p>Please click on a Thesis...</p>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "thesis",
  data() {
    return {
      currentThesis: null,
      message: "",
    };
  },
  methods: {
    getThesis(id) {
      DataService.get(id)
        .then((response) => {
          this.currentThesis = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentThesis.id,
        title: this.currentThesis.title,
        firma: this.currentThesis.firma,
        published: status,
      };

      DataService.update(this.currentThesis.id, data)
        .then((response) => {
          this.currentThesis.published = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateThesis() {
      DataService.update(this.currentThesis.id, this.currentThesis)
        .then((response) => {
          console.log(response.data);
          this.message = "The Thesis was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteThesis() {
      DataService.delete(this.currentThesis.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "theses" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getThesis(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>