<script lang="ts" setup>
import pages from "./components/pages/main";

const parsedindex = atob(new URL(document.URL).searchParams.get("page") ?? "TWFpbg==")

const pageSelected = pages[parsedindex] ?? pages.Main

</script>

<style lang="scss" scoped></style>

<template>
    <component :is="pageSelected"></component>
</template>