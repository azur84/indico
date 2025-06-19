<script lang="ts" setup>
import pages from "./components/pages/main";
import TopBar from "./components/topbar/main.vue";

// Decode the base64 encoded page index from the URL
// Default to "Main" if no valid index is provided

const parsedindex = atob(new URL(document.URL).searchParams.get("page") ?? "TWFpbg==")

const pageSelected = pages[parsedindex] ?? pages.Main

</script>

<style lang="css" scoped>

</style>

<template>
    <TopBar />
    <component :is="pageSelected"></component>
</template>