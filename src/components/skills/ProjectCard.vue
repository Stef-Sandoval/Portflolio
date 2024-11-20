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
      <p v-if="hover">{{ project.description }}</p>
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

.project-image {
  width: 100%; /* Full width of the card */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Rounded corners for the image */
}

.project-card h2 {
  font-size: 2em;
  transition: text-shadow 0.3s;
}

.project-card .category {
  font-size: 1.2em;
  color: #777; /* Gray color for category */
}

.project-card p {
  font-size: 1.2em;
}

.project-card:hover h2 {
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
}
</style>
