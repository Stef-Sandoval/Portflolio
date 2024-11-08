<script setup>
import SkillCard from "@/components/home/SkillCard.vue";

const skillCards = [1, 2, 3, 4]; // This can be an array of your skill card data
</script>

<template>
  <div class="skill-card-container">
    <SkillCard
      v-for="(card, index) in skillCards"
      :key="index"
      class="skill-card"
    />
  </div>
</template>

<style scoped>
.skill-card-container {
  position: relative; /* Position relative for absolute children */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
}

.skill-card {
  width: 200px; /* Set a fixed width for cards */
  height: 300px; /* Set a fixed height for cards */
  margin: 0 30px; /* Add some margin between cards */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  background-color: white; /* Card background */
}

/* Position cards in a pyramid shape */

/* Hover effects */
.skill-card:hover {
  transform: translateY(60px) scale(1.1); /* Raise and scale the hovered card */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3); /* Increase shadow on hover */
}
</style>
