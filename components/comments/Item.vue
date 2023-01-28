<template>
  <div>
    <div class="item-card border-b relative">
      <div class="items-holder">
        <img
          v-if="item.user?.avatar"
          :src="item.user?.avatar"
          :alt="item.user?.avatar"
        />
        <img v-else src="~/assets/images/profile.svg" alt="profile" />
      </div>
      <div class="items-holder">
        <div class="title">
          <h4 v-text="item.user?.name"></h4>
          <span v-text="$returnDate(item.date)"></span>
        </div>
        <p v-text="item.text"></p>
        <div class="btn-holder">
          <div
            class="btn-like"
            :class="item.iLikedIt ? 'active-like' : ''"
            @click="likeComments(item.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
              />
            </svg>
            <span v-text="item.likes"></span>
          </div>
          <span class="reply-text" @click="openReply(item.id)">Reply</span>
        </div>

        <div v-for="(reply, r) in item?.replies" :key="r" class="list-holder">
          <div class="item-card">
            <div class="items-holder">
              <img
                v-if="reply.user?.avatar"
                :src="reply.user?.avatar"
                :alt="reply.user?.avatar"
              />
              <img v-else src="~/assets/images/profile.svg" alt="profile" />
            </div>
            <div class="items-holder">
              <div class="title">
                <h4 v-text="reply.user?.name"></h4>
                <span v-text="$returnDate(reply.date)"></span>
              </div>
              <p v-text="reply.text"></p>
              <div class="btn-holder">
                <div
                  class="btn-like"
                  @click="likeComments(reply.id)"
                  :class="reply.iLikedIt ? 'active-like' : ''"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
                    />
                  </svg>
                  <span v-text="reply.likes"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <commentsReply :commentId="commentId" :id="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      commentId: 3,
    };
  },

  methods: {
    ...mapActions({
      updateLike: "updateLike",
    }),
    openReply(id) {
      this.commentId = id;
    },
    async likeComments(id) {
      try {
        await this.updateLike(id);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.border-b {
  border-bottom: 1px solid var(--border);
}
.item-card {
  display: flex;
  align-items: flex-start;

  gap: 10px;
  padding: 20px;
  .items-holder {
    .title {
      display: flex;
      gap: 10px;
      align-items: center;
      h4 {
        font-family: "Inter-Bold";
        color: var(--title);
      }
      span {
        color: var(--gray2);
        font-size: 13px;
      }
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    p {
      color: var(--gray3);
      font-family: "Poppins-Regular";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      margin-top: 10px;
    }
    .btn-holder {
      display: flex;
      align-items: center;
      margin: 15px 0;
      gap: 10px;
      .reply-text {
        color: var(--blue);
        font-size: 14px;
        &:hover {
          cursor: pointer;
        }
      }
      .btn-like {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        background-color: var(--gray4);
        border-radius: 20px;
        width: 50px;
        height: 20px;
        padding: 2px;
        svg {
          width: 15px;
          color: var(--gray6);
        }
        span {
          font-family: "Inter-Medium";
          font-size: 13px;
        }
        &:hover {
          cursor: pointer;
        }
      }
      .active-like {
        background-color: var(--blue);
        span {
          color: var(--white);
        }
        svg {
          fill: var(--white);
        }
      }
    }
  }
}
</style>
