<script setup>
import SkillCard from "@/components/home/SkillCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const skillCards = [
  { img_url: "/img/Iustracioncardimg.png", route: "ilustracion" },
  { img_url: "/img/webcardimg.png", route: "web" },
  { img_url: "/img/3Dimgcard2.png", route: "3d" },
  { img_url: "/img/Videogamescardimg.png", route: "videojuegos" },
];

const handleCardClick = (route) => {
  router.push(`/skills/${route}`);
};
</script>

<template>
  <div class="section-container">
    <div class="skill-card-container">
      <SkillCard
        v-for="(card, index) in skillCards"
        :key="index"
        class="skill-card"
        :img_url="card.img_url"
        @click="handleCardClick(card.route)"
      />
    </div>
  </div>
</template>

<style scoped>
.section-container {
  background-color: purple;
  padding: 20px 0;
  position: relative;
}

.skill-card-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  gap: 20px;
  flex-wrap: wrap;
  padding: 30px 0px;
}

.skill-card {
  flex: 0 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
  background-color: white;
  position: relative;
  top: -90px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: invade 0.5s forwards;
}

@keyframes invade {
  0% {
    top: -80px;
  }
  100% {
    top: 0;
  }
}

.skill-card:hover {
  transform: translateY(-20px) scale(1.1) rotate(2deg);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}
</style>
