<template>
  <div class="home">
    <Post></Post>
    <button class="reset-likes-btn" v-on:click="ResetLike"> Reset likes</button>
  </div>
</template>

<script>
// @ is an alias to /src

import Post from "@/components/Post.vue";

export default {
  name: "HomeView",
  created() { this.$store.dispatch('fetchPosts');
  },
  components: {
    Post
  },
  data: function() {
    return {};
  },
  methods: {
    ResetLike: function() {
      this.$store.commit("ResetLike");
    }
  }
};
</script>

<style scoped>
.reset-likes-btn {
  margin-bottom: 10px;
  padding: 8px 12px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.reset-likes-btn:hover {
  background-color: #cc0000;
}

</style>
