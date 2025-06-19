<template>
    <figure :class="`caractere_figure innocent`">
        <figcaption class="text center innocent">Innocent</figcaption>
        <img :src="props.image" class="caractere_img"/>
        <figcaption class="text name">{{props.name}}</figcaption>
    </figure>
</template>

<script setup lang="ts">
    interface Props {
        name: string,
        image: string
    }
    const props = defineProps<Props>()
</script>

<style scoped>
    .caractere_img {
        width: 100%;
        border-radius: 20px;
    }
    .caractere_figure {
        width: 30%;
        margin: 3px;
        background: #0000006b;
        border-radius: 5px;
    }
    .innocent .caractere_img {
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