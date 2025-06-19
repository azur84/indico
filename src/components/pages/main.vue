<script setup lang="ts">
import HomePage from './home/index.vue';
import StartPage from './start/main.vue';

const data = window.localStorage.getItem("data")
</script>

<template>
    <!-- Check if the app must display HomePage or StartPage if the game is launched -->
    <HomePage v-if="data" />
    <StartPage v-else />
</template>

<style scoped></style>
