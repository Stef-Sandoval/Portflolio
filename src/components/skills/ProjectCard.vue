<template>
  <div class="card-container">
    <div
      class="project-card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @click="handleClick"
      :style="cardStyle"
    >
      <img
        v-if="project.img_1"
        :src="project.img_1"
        alt="Project Image"
        class="project-image"
      />
      <h2>{{ project.Nombre }}</h2>
      <p class="category">{{ project.categoria }}</p>
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

const handleClick = () => {
  if (props.project.url_externo) {
    // Si `url_externo` está definido, navega al enlace externo
    window.open(props.project.url_externo, "_blank");
  } else {
    // Si no está definido, no hacer nada (opcionalmente puedes loggear algo)
    console.log("No URL provided");
  }
};

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
.project-card {
  width: 400px; /* Ancho fijo */
  height: 400px; /* Alto fijo */
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end; /* Alinea el contenido hacia abajo */
}

.project-image {
  width: 100%;
  height: 100%; /* La imagen ocupa el 100% de la tarjeta */
  object-fit: cover; /* Asegura que la imagen no se deforme */
  position: absolute; /* Coloca la imagen como fondo */
  top: 0;
  left: 0;
}

.project-card h2 {
  font-size: 1.5em;
  margin-top: 10px;
  transition: text-shadow 0.3s ease-in-out;
  color: #fff;
  z-index: 2; /* Asegura que el texto esté encima de la imagen */
}

.project-card .category {
  font-size: 1.2em;
  color: #fff;
  z-index: 2; /* Asegura que el texto esté encima de la imagen */
}

.project-card p.description {
  font-size: 1.2em;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  z-index: 2; /* Asegura que el texto esté encima de la imagen */
}

.project-card:hover h2 {
  text-shadow: 0 0 20px rgba(45, 255, 249, 0.8); /* Resalta el título con el nuevo color */
}

.project-card:hover .description {
  opacity: 1; /* Muestra la descripción en el hover */
}
</style>
