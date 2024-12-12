<script setup></script>

<template>
  <div class="about-me">
    <div class="content_left">
      <h2 class="title">About Me</h2>
      <img
        src="/img/portafolio2png.png"
        alt="Imagen del portafolio"
        class="profile-image"
      />
    </div>
    <div class="content_right">
      <p>
        "Soy Estefanía Sandoval, diseñadora apasionada por la creación y el
        mundo digital. Con experiencia en marketing y herramientas de diseño,
        busco combinar creatividad y tecnología para desarrollar proyectos
        innovadores. Soy curiosa, detallista y disfruto colaborar en equipo."
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
  font-family: rocabetrial;
}

.title {
  font-size: 32px; /* Increase font size of the title */
  margin-bottom: 20px; /* Space below the title */
  color: var(--title-about-me); /* Optional: Change title color */
}

.profile-image {
  width: 350px; /* Increase width of the image placeholder */
  height: 350px; /* Increase height of the image placeholder */

  border-radius: 10px; /* Optional: Add rounded corners */
}

.content_right {
  max-width: 600px; /* Increase max width for the text content */
  font-size: 18px; /* Increase font size for the text */
  line-height: 1.4; /* Improve line height for readability */
  color: var(--text-about-me);
  font-family: vergilia;
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
