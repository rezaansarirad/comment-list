<template>
  <div>
    <div v-for="(item, c) in listComments" :key="c" class="list-holder">
      <commentsItem :item="item"  />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {

  computed: {
    ...mapGetters({
      listComments: "getComments",
    }),
  },
};
</script>

<style scoped lang="scss">
.list-holder {
  width: 100%;
}
</style>
