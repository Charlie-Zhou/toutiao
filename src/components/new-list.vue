<template>
  <div>
    <div class="list">
      <div class="article_item" v-for="item in currentList" :key="item.art_id">
        <h3 class="van-ellipsis">{{ item.title }}</h3>
        <div class="img_box" v-if="item.cover.type === 1">
          <img :src="item.cover.images[0]" class="w100" />
        </div>
        <div class="img_box" v-else-if="item.cover.type === 3">
          <img :src="item.cover.images[0]" class="w33" />
          <img :src="item.cover.images[1]" class="w33" />
          <img :src="item.cover.images[2]" class="w33" />
        </div>
        <!---->
        <div class="info_box">
          <span>{{ item.aut_name }}</span>
          <span>{{ item.comm_count }}评论</span>
          <span>{{ item.pubdate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['currentcatagtory', 'currentList'])
  },
  watch: {
    currentcatagtory (newValue) {
      this.$store.dispatch('newlist/getNewList', newValue)
    }
  }
}
</script>

<style></style>
