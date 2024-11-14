<script setup>
import SkillCard from "@/components/home/SkillCard.vue";

const skillCards = [1, 2, 3, 4]; // This can be an array of your skill card data
</script>

<template>
  <div class="section-container">
    <div class="skill-card-container">
      <SkillCard
        v-for="(card, index) in skillCards"
        :key="index"
        class="skill-card"
      />
    </div>
  </div>
</template>

<style scoped>
.section-container {
  background-color: purple; /* Purple background for the section */
  padding: 20px 0; /* Reduced padding to create a more compact section */
  position: relative; /* Position relative for absolute children */
}

.skill-card-container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
  position: relative; /* Position relative for absolute children */
  gap: 20px; /* Gap between skill cards */
  flex-wrap: wrap; /* Wrap cards to the next line */
  padding: 30px 0px;
}

.skill-card {
  flex: 0 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  border-radius: 10px; /* Rounded corners */
  background-color: white; /* Card background */
  position: relative; /* Position relative to allow for upward movement */
  top: -90px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  animation: invade 0.5s forwards; /* Animation for the invading effect */
}

/* Animation for the invading effect */
@keyframes invade {
  0% {
    top: -80px; /* Start above the section */
  }
  100% {
    top: 0; /* End at the normal position */
  }
}

/* Hover effects */
.skill-card:hover {
  transform: translateY(-20px) scale(1.1) rotate(2deg); /* Raise and scale the hovered card */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3); /* Increase shadow on hover */
}
</style>
