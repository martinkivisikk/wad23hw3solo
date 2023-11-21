<template>
  <div id="post-list">
    <ul>
      <li class="item" v-for="post in posts" :key="post.id">
        <div class="post-header">
          <img class="profile-pic" src="../assets/logo.png" alt="">
          <section class="post-date"><p>{{ post.date }}</p></section>
        </div>

        <section class="uploaded-img"><img :src=post.imageSrc :alt=post.imageAlt></section>
        <section class="blog-text"><p>{{ post.content }}</p></section>

        <div class="like-section">
          <button class="like-btn" v-on:click="LikePost(post)">
            <img src="../assets/like-btn.png" width="20" height="20" alt="Like">
          </button>
          <p class="likes">{{ post.likes }} likes</p>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Post",
  data: function() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    LikePost(post) {
      if (!post.liked) {
        this.$store.commit("IncreaseLike", post);
      } else {
        this.$store.commit("DecreaseLike", post);
      }
    }
  }
};
</script>

<style scoped>
.item {
  background: #333; /* Adjusted background color with reduced opacity for a darker look */
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

#post-list {
  background: #292b2c;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 20px;
}

#post-list ul {
  padding: 0;
  list-style: none;
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
}

.profile-pic {
  width: 40px;
  height: auto;
  margin-right: 10px; /* Added margin between profile pic and post date */
}

.post-date {
  font-weight: bold;
  color: #ddd;
}

.uploaded-img img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.blog-text {
  color: #ccc;
}

.like-section {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.like-btn {
  cursor: pointer;
  background: transparent;
  border: none;
  margin-right: 5px;
}

.likes {
  color: #42b983;
  font-weight: bold;
}
</style>