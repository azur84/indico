<template>
    <div id="topbar">
        <a class="topbar-child topbar-button text" href="/">Accueil</a>
        <img alt="logo" src="/logo.png" id="logo" class="topbar-child">
        <a class="topbar-child topbar-button text" href="/?page=Q3JlZGl0">Credit</a>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    #topbar {
        display: flex;
        height: 7%;
        justify-content: space-around;
    }
    #logo {
        object-fit: contain;
    }
    .topbar-button {
        text-align: center;
        align-content: center;
        background: #0000003f;
        font-size: 1.3em;
    }
    .topbar-button:active {
        background: #00000075;
        width: 100%;
    }

    #topbar:has(> .topbar-button:active) .topbar-child:not(:active) {
        width: 0px;
    }

    .topbar-child {
        width: 100%;
        height: 100%;
        transition-property: width background;
        transition-duration: 0.2s;
        overflow: hidden;
    }
</style>