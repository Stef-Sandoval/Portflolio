<script setup>
defineProps({
  img_url: String,
  title: String, // Nuevo: Define una propiedad para el título
});
</script>

<template>
  <div class="card-container">
    <img class="skill_img" :src="img_url" alt="Skill Image" />
    <div class="overlay">
      <span class="title">{{ title }}</span>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  width: 200px; /* Set the width of the card container */
  height: 260px; /* Set the height of the card container */
  display: flex; /* Use Flexbox for layout */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  overflow: hidden;
  cursor: pointer;
  position: relative; /* Necessary for overlay positioning */
}

.skill_img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--overlay-color-card);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease; /* Smooth transition */
  z-index: 2; /* Above the image */
}

.card-container:hover .overlay {
  opacity: 1; /* Show overlay on hover */
}

.title {
  color: var(--text-first-title); /* White text color */
  font-size: 1.5rem; /* Adjust font size */
  font-weight: bold;
  font-family: vergilia;
  text-transform: capitalize; /* Capitalize the first letter */
}
</style>
