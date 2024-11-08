<template>
  <div class="card-container">
    <img src="/public/img/Card.png" alt="Card image" class="card-image" />
  </div>
</template>

<style scoped>
.card-container {
  display: flex; /* Use Flexbox for layout */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Full viewport height */
}

.card-image {
  width: 60%; /* Set the width of the image */
  height: auto; /* Maintain aspect ratio */
  animation: float 3s ease-in-out infinite; /* Floating animation */
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
