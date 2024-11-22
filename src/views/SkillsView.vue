<template>
  <div class="main-container">
    <div class="section-head-image-container">
      <img
        src="/img/Iustracioncardimg.png"
        alt="Section image"
        class="section-image"
      />
      <span class="section-title">{{ route.params.skill }}</span>
      <img src="/img/Cardforskills.png" alt="Card image" class="card-image" />
    </div>
  </div>
  <div class="cards-container">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </div>
</template>

<script setup>
import ProjectCard from "@/components/skills/ProjectCard.vue";
import { ref, onMounted } from "vue";
import { database } from "@/lib/database";
import { useRoute } from "vue-router";

const route = useRoute();

const projects = ref([]); // Inicializa un array reactivo para almacenar los proyectos

onMounted(async () => {
  let result;
  try {
    result = await database;
    projects.value = result.filter((e) => e.categoria == route.params.skill); // Asigna el resultado a la variable reactiva
  } catch (error) {
    console.error("Error al cargar los proyectos:", error); // Manejo de errores
  }
});
</script>

<style scoped>
/* General container */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.section-head-image-container {
  width: 105%;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Animated image */
.section-image {
  position: absolute;
  border-radius: 999px;
  width: 150px;
  height: 150px;
  top: 50%;
  left: -20%; /* Fuera del contenedor inicialmente */
  transform: translateY(-50%) rotate(0deg);
  z-index: 10;
  animation: slideInRotate 2s ease-in-out forwards;
}

/* Title text */
.section-title {
  position: absolute;
  text-transform: capitalize;
  font-size: 6rem;
  font-weight: bold;
  font-family: vergilia;
  color: #f9e5f0;
  opacity: 0;
  text-align: center;
  top: 65%;
  z-index: 10;
  transform: translateY(-50%);
  animation: fadeInText 1000ms ease-in-out 1s forwards; /* Comienza después de la animación de la imagen */
}
.cards-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
/* Card image */
.card-image {
  width: 80%;
  height: 70%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

/* Animations */

/* Imagen entra deslizándose y girando */
@keyframes slideInRotate {
  from {
    left: 100%;
    transform: translateY(-50%) rotate(360deg); /* Inicia girando rápido */
  }
  to {
    left: 4%; /* Posición final */
    transform: translateY(-50%) rotate(0deg); /* Termina sin rotación */
  }
}

/* Texto aparece con opacidad */
@keyframes fadeInText {
  from {
    opacity: 0;
    transform: translateY(-50%) scale(0.8); /* Aparece pequeño */
  }
  to {
    opacity: 1;
    transform: translateY(-50%) scale(1); /* Tamaño final */
  }
}
</style>
