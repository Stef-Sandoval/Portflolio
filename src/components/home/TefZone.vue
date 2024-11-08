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
  color: white; /* Text color */
  z-index: 1; /* Ensure text is above the background */
  left: 30%;
  gap: 20px;
  width: 300px;
}
h1 {
  font-family: rocabetrial;
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
  top: 25%; /* Adjust as needed */
  right: 10%; /* Adjust as needed */
  max-width: 70%; /* Set a max width for the right image */
  height: 70%; /* Maintain aspect ratio */
  z-index: 1; /* Ensure it is above the background image */
}
</style>
