<template>
  <div class="tefzone_component">
    <div class="text-container">
      <h1>TefZone</h1>
      <h4>Design</h4>
    </div>
    <div class="image-container">
      <img
        class="background-image"
        src="/img/Home_view.png"
        alt="Background Image"
      />
      <img class="right-image" src="/img/mune.png" alt="Right Image" />
    </div>
  </div>
</template>

<style scoped>
.tefzone_component {
  display: flex;
  height: 105vh;
  position: relative; /* For positioning child elements */
  overflow: hidden;
}

.text-container {
  flex: 1; /* Take up remaining space */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center text vertically */
  padding: 20px; /* Add some padding */
  color: var(--text-first-title);
  z-index: 1; /* Ensure text is above the background */
  left: 20%;
  gap: 20px;
  width: 300px;
  font-size: 48px;
}
h1 {
  font-family: rocabetrial;
  text-shadow: 0 0 5px rgba(222, 178, 241, 0.8),
    /* White glow */ 0 0 10px rgba(255, 255, 255, 0.6),
    /* White glow */ 0 0 15px rgba(0, 255, 255, 1),
    /* Cyan glow */ 0 0 20px rgba(0, 255, 255, 0.8); /* Cyan glow */
}

h4 {
  font-family: vergilia;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8),
    /* White glow */ 0 0 10px rgba(255, 255, 255, 0.6),
    /* White glow */ 0 0 15px rgb(153, 0, 255),
    /* Yellow glow */ 0 0 20px rgba(230, 0, 255, 0.8); /* Yellow glow */
}

.image-container {
  position: absolute; /* For positioning the images */
  flex: 1; /* Take up remaining space */
  width: 100%;
  height: 105vh;
}

.background-image {
  width: 100%;
  height: 100%;
  position: absolute; /* Position it behind the right image */
  top: 0;
  left: 0;
  z-index: 0; /* Background image */
}

.right-image {
  position: absolute; /* Position it over the background */
  bottom: 5%; /* Adjust as needed */
  right: 10%; /* Adjust as needed */
  max-width: 70%; /* Set a max width for the right image */
  height: 70%; /* Maintain aspect ratio */
  z-index: 1; /* Ensure it is above the background image */
}
/* Responsive Styles */
@media (max-width: 1100px) {
  h1 {
    font-size: 50px;
  }
  h4 {
    font-size: 46px;
  }
}
@media (max-width: 650px) {
  .right-image {
    width: 267px; /* Set width to 45% when screen size is 500px or less */
    height: 451px;
    bottom: 8%; /* Keep it at the top */
    right: 50%; /* Center it horizontally */
    transform: translateX(50%); /* Adjust for centering */
  }

  .text-container {
    position: absolute; /* Position text above the image */
    top: 18%; /* Adjust as needed to position above the image */
    left: 50%; /* Center text */
    transform: translateX(-50%); /* Adjust for centering */
    width: auto; /* Allow text width to adjust */
  }
  h1 {
    font-size: 42px;
  }
  h4 {
    display: none;
  }
}
</style>
