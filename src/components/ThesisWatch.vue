<template>
  <div>
    <h1>Hello from the other side!{{thesis.titel}}</h1>
    <h3>{{this.$route.params.id}}</h3>
    <div v-for="tag in tags" :key="tag.name">
        {{tag.name}}
    </div>
  </div>
</template>

<script>

export default {
    computed: {
        thesis() {
            return this.$store.state.theses.find(tid => tid.id == this.$route.params.id)
        },
        tags() {
            return this.$store.state.tags
        }
    }
   
}
</script>
