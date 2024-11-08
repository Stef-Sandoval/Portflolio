<script setup></script>
<template>
  <div class="about-me">
    <div class="content_left">
      <h2 class="title">About Me</h2>
      <div class="image-placeholder"></div>
    </div>
    <div class="content_right">
      <p>
        <!-- Your description text goes here -->
        Hi! I'm [Your Name], a passionate developer with a love for creating
        amazing applications. I enjoy working with Vue.js and exploring new
        technologies.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.about-me {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  padding: 20px;
  gap: 20px; /* Space between left and right content */
}

.content_left {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start of the left column */
}

.title {
  font-size: 24px;
  margin-bottom: 10px; /* Space below the title */
}

.image-placeholder {
  width: 150px; /* Adjust width as needed */
  height: 150px; /* Adjust height as needed */
  background-color: #ccc; /* Placeholder color */
}

.content_right {
  max-width: 400px; /* Set a max width for the text content */
}
</style>
