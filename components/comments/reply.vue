<template>
  <div>
    <div class="reply-holder item-card" v-if="id == commentId">
      <div
        class="line-left"
        :style="id == 3 ? ' height:80%' : 'height:60%'"
      ></div>
      <div class="items">
        <img :src="avatarUrl" alt="avatar" />
        <input
          type="text"
          placeholder="Reply"
          v-model="sendReplay"
          @change="addReplyforComment(id, $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "commentId"],
  data() {
    return {
      sendReplay: "",
      sendItem: {
        id: `input-${this.$_uid}`,
        date: Date.now(),
        user: {
          name: "Reza Ansariad",
          avatar: "",
        },
        text: "",
        likes: 0,
        iLikedIt: false,
        replies: [],
      },
    };
  },
  methods: {
    addReplyforComment(id, e) {
      this.sendItem.user.avatar = this.avatarUrl;
      this.sendItem.text = e.target.value;
      let data = this.sendItem;
      this.$store.commit("setReply", { id, data });
      this.sendReplay = "";
    },
  },
  computed: {
    avatarUrl() {
      return this.$store.state.global.avatarUrl;
    },
  },
};
</script>

<style lang="scss" scoped>
.item-card {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
}
.reply-holder {
  .items {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    input {
      width: 420px;
      height: 30px;
      margin-left: 10px;
      padding-left: 8px;
      border: 1px solid var(--gray4);
    }
  }
}

.line-left {
  position: absolute;
  left: 2.2rem;
  top: 3.5rem;
  width: 0.125rem;
  border-radius: 0.25rem;
  background-color: var(--gray4);
}
</style>
