export const state = () => ({
  comments: [
    {
      id: 3,
      date: 1672576574000,
      user: {
        name: "Bessie Cooper",
        avatar:
          "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg",
      },
      text: "I think for our second compaign we can try to target a different audience. How does it sound for you?",
      likes: 2,
      iLikedIt: false,
      replies: [
        {
          id: 5,
          date: 1672581014000,
          user: {
            name: "Marvin McKinney",
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
          },
          text: "Yes, that sounds good! I can think about this tomorrow. Then do we plan to start that compaign?",
          likes: 3,
          iLikedIt: true,
        },
        {
          id: 6,
          date: 1672581614000,
          user: {
            name: "Bessie Cooper",
            avatar:
              "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg",
          },
          text: "We plan to run the compaign on Friday - as far as I know. Do you think you will get this done by Thursday @Marvin?",
          likes: 0,
          iLikedIt: false,
        },
      ],
    },
    {
      id: 2,
      date: 1672232414000,
      user: {
        name: "Marvin McKinney",
        avatar:
          "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      },
      text: "The first compaign went smoothly. Please make sure to see all attachments with the results to understand the flow.",
      likes: 2,
      iLikedIt: false,
      replies: [],
    },
    {
      id: 1,
      date: 1671886814000,
      user: {
        name: "Savannah Nguyen",
      },
      text: "We have just published the first campaign. Let's see the results in the 5 days and we will iterate on this.",
      likes: 50,
      iLikedIt: true,
      replies: [],
    },
  ],
});

export const mutations = {
  setUpdateLike(state, data) {
    state.comments.map((item) => {
      if (item.id === data) {
        if (item.iLikedIt == false) {
          item.iLikedIt = true;
          item.likes += 1;
        } else {
          item.iLikedIt = false;
          if (item.likes > 0) {
            item.likes -= 1;
          }
        }
      }
      if (item?.replies?.length) {
        item.replies.map((el) => {
          {
            if (el.id === data) {
              if (el.iLikedIt == false) {
                el.iLikedIt = true;
                el.likes += 1;
              } else {
                el.iLikedIt = false;
                if (el.likes > 0) {
                  el.likes -= 1;
                }
              }
            }
          }
        });
      }
    });
  },

  setNewComment(state, data) {
    state.comments.push(data);
  },

  setReply: (state, { id, data }) => {
    state.comments.map((item) => {
      if (item.id === id) {
        if (item.replies) {
          item.replies.push(data);
        }
      }
    });
  },
};

export const actions = {
  updateLike({ commit }, data) {
    commit("setUpdateLike", data);
  },
};

export const getters = {
  getComments: (state) => state.comments,
};
