import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    posts: []
  },
  getters: {},
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    ResetLike: state => {
      state.posts.forEach(post => {
        post.likes = 0;
        post.liked=false;
      })
    },
    IncreaseLike: function(state, post) {
      post.likes++;
      post.liked=true;
    },
    DecreaseLike: function(state, post) {
      post.likes--;
      post.liked=false;
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const posts = await response.json();
        commit("setPosts", posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        console.log("Fetching posts from local file.")
        const response = await fetch("../data/test.json");
        const data = await response.json();
        const posts = data.posts;
        commit("setPosts", posts);
      }
    }
  },
  modules: {}
});
