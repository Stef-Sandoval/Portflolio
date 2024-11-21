<template>
  <div class="card-container">
    <div
      class="project-card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :style="cardStyle"
    >
      <img
        v-if="project.img_1"
        :src="project.img_1"
        alt="Project Image"
        class="project-image"
      />
      <h2>{{ project.Nombre }}</h2>
      <p class="category">{{ project.Categoria }}</p>
      <p v-if="hover" class="description">{{ project.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const hover = ref(false);

const cardStyle = computed(() => ({
  transition: "transform 0.3s, box-shadow 0.3s ease-in-out",
  transform: hover.value ? "scale(1.05)" : "scale(1)",
  boxShadow: hover.value
    ? "0 0 20px rgba(45, 255, 249, 0.8)" // Cambio el color del brillo aquí
    : "none",
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
  width: 90%; /* Flexible width */
  max-width: 400px; /* Maximum width */
  height: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.project-card h2 {
  font-size: 2em;
  transition: text-shadow 0.3s ease-in-out;
}

.project-card .category {
  font-size: 1.2em;
  color: #777;
}

.project-card p.description {
  font-size: 1.2em;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}

.project-card:hover h2 {
  text-shadow: 0 0 20px rgba(45, 255, 249, 0.8); /* Resalta el título con el nuevo color */
}

.project-card:hover .description {
  opacity: 1; /* Show description on hover */
}
</style>
