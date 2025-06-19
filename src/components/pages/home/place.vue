<template>
    <!-- A card for each place in the game -->
    <figure :class="`place_figure${props.innocent ? ' innocent' : ''}`">
        <figcaption :class="`text center${props.innocent ? ' innocent' : ' suspect'}`">{{ props.innocent ? "Innocent" : "Suspect" }}</figcaption>
        <img :src="`/places/${props.image}.png`" class="place_img"/>
        <figcaption class="text name">{{props.name}}</figcaption>
    </figure>
</template>

<script setup lang="ts">
    interface Props {
        name: string,
        image: string,
        innocent: boolean
    }
    const props = defineProps<Props>()
</script>

<style scoped>
    .place_img {
        width: 100%;
        border-radius: 20px;
    }
    .place_figure {
        width: 30%;
        margin: 3px;
        background: #0000006b;
        border-radius: 5px;
    }
    .innocent .place_img {
        filter: grayscale(100%);
        mix-blend-mode: luminosity;
    }
    .center {
        text-align: center;
    }
    figcaption.innocent {
        font-style: italic;
    }
    figcaption.suspect {
        font-weight: bold;
    }
    .name {
        padding-left: 2px;
    }
</style>