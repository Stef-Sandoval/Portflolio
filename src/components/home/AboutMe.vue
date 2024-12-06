<script setup></script>

<template>
  <div class="about-me">
    <div class="content_left">
      <h2 class="title">About Me</h2>
      <div class="image-placeholder"></div>
    </div>
    <div class="content_right">
      <p>
        "Soy Estefanía Sandoval, diseñadora apasionada por la creación, el mundo
        digital y el lenguaje informático. Con conocimientos sólidos en
        marketing y experiencia en diversos programas de Adobe y herramientas de
        diseño, siempre estoy en busca de nuevas ideas y oportunidades de
        aprendizaje. Mi enfoque es combinar creatividad y tecnología para
        desarrollar proyectos innovadores. Me considero una persona curiosa y
        detallista, comprometida con aprovechar al máximo la tecnología en cada
        proyecto y compartir ideas en un entorno colaborativo."
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-me {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  padding: 60px; /* Increase padding for a larger section */
  gap: 60px; /* Increase space between left and right content */
  background-color: #f9f9f9; /* Optional: Add a background color */
  border-radius: 10px; /* Optional: Add rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
}

.content_left {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start of the left column */
}

.title {
  font-size: 32px; /* Increase font size of the title */
  margin-bottom: 20px; /* Space below the title */
  color: #3afbf4; /* Optional: Change title color */
}

.image-placeholder {
  width: 200px; /* Increase width of the image placeholder */
  height: 200px; /* Increase height of the image placeholder */
  background-color: #ccc; /* Placeholder color */
  border-radius: 10px; /* Optional: Add rounded corners */
}

.content_right {
  max-width: 600px; /* Increase max width for the text content */
  font-size: 18px; /* Increase font size for the text */
  line-height: 1.4; /* Improve line height for readability */
  color: #8e3afb; /* Optional: Change text color */
}

@media (max-width: 768px) {
  .about-me {
    flex-direction: column; /* Cambiar a columna en pantallas pequeñas */
    padding: 30px;
    gap: 30px;
  }

  .title {
    font-size: 24px; /* Reducir el tamaño del título */
  }
  .image-placeholder {
    width: 100px;
    height: 100px;
  }

  .content_right {
    font-size: 12px; /* Reducir el tamaño del texto */
    line-height: 1; /* Reducir la altura de línea */
    text-align: center;
  }
}
</style>
