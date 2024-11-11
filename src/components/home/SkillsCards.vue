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
  overflow: visible; /* Allow overflow to show the invading effect */
  position: relative; /* Position relative for absolute children */
}

.skill-card-container {
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Align items to the bottom */
  height: 60vh; /* Height of the skill card section */
  position: relative; /* Position relative for absolute children */
}

.skill-card {
  width: 200px; /* Set a fixed width for cards */
  height: 300px; /* Set a fixed height for cards */
  margin: 0 15px; /* Add some margin between cards */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
  border-radius: 10px; /* Rounded corners */
  background-color: white; /* Card background */
  position: relative; /* Position relative to allow for upward movement */
  top: -50px; /* Move the cards up to create the invading effect */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow for depth */
}

/* Hover effects */
.skill-card:hover {
  transform: translateY(-30px) scale(1.1) rotate(2deg); /* Raise and scale the hovered card */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3); /* Increase shadow on hover */
}
</style>
