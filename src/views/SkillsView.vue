<template>
  <div class="main-container">
    <div class="image-container">
      <!-- Marcador de posición para la imagen -->
      <div class="placeholder-image">Imagen aquí</div>
    </div>
    <div class="cards-container">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/skills/ProjectCard.vue";
import { ref } from "vue";
import { database } from "@/lib/database";

console.log(database);

// Datos de ejemplo para las tarjetas de proyecto
const projects = ref([
  { title: "Proyecto 1", description: "Descripción del Proyecto 1" },
  { title: "Proyecto 2", description: "Descripción del Proyecto 2" },
  { title: "Proyecto 3", description: "Descripción del Proyecto 3" },
  { title: "Proyecto 4", description: "Descripción del Proyecto 4" },
  { title: "Proyecto 5", description: "Descripción del Proyecto 5" },
  { title: "Proyecto 6", description: "Descripción del Proyecto 6" },
]);
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.image-container {
  margin-bottom: 20px; /* Espacio entre la imagen y las tarjetas */
}

.placeholder-image {
  width: 600px; /* Ancho completo */
  height: 300px; /* Altura mayor para el marcador de posición */
  max-width: 1200px; /* Ancho máximo para el marcador de posición */
  background-color: #e0e0e0; /* Color de fondo gris claro */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px; /* Esquinas redondeadas */
  font-size: 24px; /* Tamaño del texto */
  color: #555; /* Color del texto */
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres tarjetas por fila */
  gap: 20px; /* Espacio entre tarjetas */
  width: 100%; /* Ancho completo del contenedor padre */
  max-width: 1200px; /* Ancho máximo para el contenedor de tarjetas */
}

.project-card {
  position: relative; /* Posicionamiento relativo para el texto */
  background-color: #ffffff; /* Fondo blanco para las tarjetas */
  border: 1px solid #ccc; /* Borde gris */
  border-radius: 10px; /* Esquinas redondeadas */
  padding: 20px; /* Espaciado interno */
  overflow: hidden; /* Ocultar contenido que desborda */
  transition: transform 0.3s; /* Transición suave para el hover */
}

.project-card:hover {
  transform: scale(1.05); /* Aumentar el tamaño en hover */
}

.project-card .title,
.project-card .description {
  position: absolute; /* Posicionamiento absoluto */
  left: 20px; /* Espacio desde la izquierda */
  opacity: 0; /* Ocultar por defecto */
  transition: opacity 0.3s; /* Transición suave para la opacidad */
}

.project-card .title {
  top: 20px; /* Espacio desde la parte superior */
  font-size: 1.5em; /* Tamaño del texto del título */
}

.project-card .description {
  bottom: 20px; /* Espacio desde la parte inferior */
  background-color: rgba(255, 255, 255, 0.9); /* Fondo semi-transparente */
  padding: 10px; /* Espaciado interno */
  border-radius: 5px; /* Esquinas redondeadas */
}

.project-card:hover .title,
.project-card:hover .description {
  opacity: 1; /* Mostrar al pasar el ratón */
}
</style>
