<template>
  <div class="card-container">
    <div
      class="project-card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :style="cardStyle"
    >
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const hover = ref(false);

const cardStyle = computed(() => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  transform: hover.value ? "scale(1.05)" : "scale(1)",
  boxShadow: hover.value ? "0 0 20px rgba(255, 215, 0, 0.8)" : "none",
}));
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height for centering */
}

.project-card {
  width: 400px; /* Set width */
  height: 500px; /* Set height */
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card h2 {
  font-size: 2em;
  transition: text-shadow 0.3s;
}

.project-card p {
  font-size: 1.2em;
}

.project-card:hover h2 {
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
}
</style>
