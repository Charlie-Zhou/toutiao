<template>
  <div id="app">
    <ul class="catagtory">
      <li
        @click="$store.commit('catagtory/updateCurrentCatagtory', item.id)"
        :class="{ select: currentcatagtory === item.id }"
        v-for="item in catagtory"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['catagtory', 'currentcatagtory'])
  },
  created () {
    this.$store.dispatch('catagtory/getCatagtory')
  }
}
</script>

<style></style>
