<template>
  <div class="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  position: fixed; /* Fixed position at the top */
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333; /* Dark background color */
  padding: 15px;
  text-align: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Box shadow for a subtle lift */
}

nav {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

nav a {
  font-weight: bold;
  color: white; /* Changed link color to white for better visibility */
  text-decoration: none;
  margin: 0 15px; /* Adjust the margin value as needed */
  transition: color 0.3s ease; /* Smooth color transition on hover */
}

nav a:hover {
  color: #42b983; /* Color change on hover */
}
</style>