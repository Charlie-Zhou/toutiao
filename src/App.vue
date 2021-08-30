<template>
  <div id="app">
    <catagtory />
    <new-list />
  </div>
</template>

<script>
import Catagtory from './components/catagtory.vue'
import NewList from './components/new-list.vue'
export default {
  name: 'App',
  components: {
    Catagtory,
    NewList
  }
}
</script>

<style></style>
