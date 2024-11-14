<script setup>
import AboutMe from "@/components/home/AboutMe.vue";
import SkillsCards from "@/components/home/SkillsCards.vue";
import TefZone from "@/components/home/TefZone.vue";
import { database } from "@/lib/database";

console.log(database);
</script>

<template>
  <TefZone />
  <AboutMe />
  <SkillsCards />
</template>

<style scoped></style>
