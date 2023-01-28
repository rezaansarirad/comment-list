<template>
  <div class="card-holder">
    <div class="items">
      <img :src="avatarUrl" alt="avatar" />

      <input
        type="text"
        placeholder="Start a discussion"
        v-model="newCommnet"
        @change="sendComment($event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newCommnet: "",
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
      },
    };
  },

  methods: {
    sendComment(e) {
      this.sendItem.user.avatar = this.avatarUrl;
      this.sendItem.text = e.target.value;
      this.sendItem.user.avatar = this.avatarUrl;
      this.$store.commit("setNewComment", this.sendItem);
      this.newCommnet = "";
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
.card-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: var(--gray5);
  border-bottom: 1px solid var(--border);
  .items {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    input {
      width: 540px;
      height: 30px;
      margin-left: 10px;
      padding-left: 8px;
      border: 1px solid var(--gray4);
    }
  }
}
</style>
