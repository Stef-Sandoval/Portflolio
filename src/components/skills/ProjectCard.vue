<template>
  <div class="card-container">
    <div
      class="project-card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @click="handleClick"
      :style="cardStyle"
    >
      <video
        v-if="project.url_video"
        :src="project.url_video"
        muted
        loop
        autoplay
        playsinline
        class="project-video"
      ></video>
      <div v-else-if="projectImages.length > 1" class="slider-container">
        <img
          :src="projectImages[currentImageIndex]"
          alt="Project Slider Image"
          class="project-image"
        />
      </div>
      <img
        v-else-if="project.img_1"
        :src="project.img_1"
        alt="Project Image"
        class="project-image"
      />

      <!-- El nombre aparecerá solo al hacer hover -->
      <h2 class="project-name">{{ project.nombre }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const handleClick = () => {
  if (props.project.url_externo) {
    window.open(props.project.url_externo, "_blank");
  } else {
    console.log("No URL provided");
  }
};

const hover = ref(false);

const cardStyle = computed(() => ({
  transition: "transform 0.3s, box-shadow 0.3s ease-in-out",
  transform: hover.value ? "scale(1.05)" : "scale(1)",
  boxShadow: hover.value ? "0 0 20px rgba(45, 255, 249, 0.8)" : "none",
}));

// Computed property para obtener las imágenes del proyecto
const projectImages = computed(() => {
  return [props.project.img_1, props.project.img_2, props.project.img_3].filter(
    (img) => !!img
  );
});

// Estado y funciones para el slider
const currentImageIndex = ref(0);
let intervalId = null;

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    currentImageIndex.value =
      (currentImageIndex.value + 1) % projectImages.value.length;
  }, 2000);
};

const stopAutoSlide = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  if (projectImages.value.length > 1) {
    startAutoSlide();
  }
});

onBeforeUnmount(() => {
  stopAutoSlide();
});
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-card {
  width: 400px;
  height: 400px;
  background-color: rgb(45, 228, 225);
  border-radius: 10px;
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.project-name {
  position: absolute;
}

.project-card h2.project-name {
  font-size: 1.5em;
  font-family: rocabetrial;
  color: var(--title-skill-view);
  text-shadow: 0 0 10px var(--text-cardproject-shadow);
  z-index: 2;
  opacity: 0; /* Ocultar el nombre por defecto */
  transition: opacity 0.3s ease-in-out;
  margin: 20px 0;
}

.project-card:hover h2.project-name {
  opacity: 1; /* Mostrar el nombre al hacer hover */
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
