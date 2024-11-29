<script setup>
defineProps({
  img_url: String,
});
</script>

<template>
  <div class="card-container">
    <img class="skill_img" :src="img_url" alt="" />
    <img src="/img/Card.png" alt="Card image" class="card-image" />
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
}

.card-image {
  width: 100%; /* Set the width of the image */
  height: auto; /* Maintain aspect ratio */
  top: 10px; /* Position the image slightly above the container */
  animation: float 3s ease-in-out infinite; /* Floating animation */
}

.skill_img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
}

/* Floating animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0); /* Start and end at original position */
  }
  50% {
    transform: translateY(-10px); /* Move up 10 pixels */
  }
}
</style>
