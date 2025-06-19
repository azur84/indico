<template>
    <div id="mainpage">
        <!-- Main page if the game is not launhced -->
        <h1 class="text title">Chers enquêteurs, soyez les bienvenus !</h1>
        <h2 class="text sub-title">Introduction :</h2>
        <figure>
            <figcaption class="text">Version audio :</figcaption>
            <audio controls src=""></audio>
        </figure>
        <p class="text paragraphe">Chers détectives, aujourd'hui, Madame Fumeblanc a été retrouvée morte dans sa villa.
            Votre mission, si vous l'acceptez (vous n'avez pas vraiment le choix), sera de trouver le coupable, le lieu
            et l'arme du crime.</p>
        <p class="text paragraphe">Pour cela, vous devrez parcourir Carpentras en scannant chaque QR-code dans chaque lieu-dit.</p>
        <h3 class="text sub-title">Rendez-vous dans un lieu-dit pour démarrer l'enquête !</h3>
        <MapComponent :x="44.054119" :y="5.048239" :zoom="15" :points="places.getPoints().slice(0, -1)" id="map" />
    </div>
</template>

<script setup lang="ts">
import places from "../../../data/places";
import MapComponent from "../../map/index.vue";
</script>

<style scoped>
#map {
    height: 25vh;
    width: 100%;
    width: calc(100% - 10px);
    margin: 5px;
    border-radius: 5px;
}

.title {
    padding-left: 5px;
    background: #0000001a;
    border-radius: 5px;
    margin: 0px;
    font-size: 1.9em;
}

.sub-title {
    background: #0000001a;
    padding-left: 5px;
    margin-bottom: 0px;
}

.paragraphe {
    background: #0000001a;
    padding-left: 5px;
    padding-right: 5px;
    text-align: justify;
    margin-top: 5px;
    margin-bottom: 0px;
}

#mainpage {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: scroll;
}
</style>