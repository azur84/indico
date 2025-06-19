<script setup lang="ts">
import Character from './character.vue';
import Place from './place.vue';
import Weapon from './weapon.vue';
import MapComponent from '../../map/index.vue'
import { onMounted, useTemplateRef } from 'vue';
import places from '../../../data/places';

const data = JSON.parse(localStorage.getItem("data") ?? "")

const map = useTemplateRef("map")

// Set the opacity of the markers on the map when the component is mounted
// The next destination marker will be fully opaque, others will be semi-transparent
// This is done to highlight the next destination in the game
onMounted(() => {
    map.value?.markers.forEach(marker => marker.setOpacity(0.5))
    map.value?.markers[data?.next ?? 0].setOpacity(1)
})

</script>

<template>
    <!-- Main page if the game is launch -->
    <div id="mainpage">
        <h1 class="text">Carnet de note :</h1>
        <h2 class="text">Carte :</h2>
        <MapComponent :x="44.054119" :y="5.048239" :zoom="15" :points="places.getPoints()" id="map"
            ref="map" />
        <h3 class="text">Prochaine destination : <br />{{ places.getById(data?.next ?? 0).name }}</h3>
        <h2 class="text">Suspects :</h2>
        <div class="cluelist" id="character">
            <Character name="Colonel vertebrale" image="Colo_vertebrale"
                :innocent="data?.character?.colo_vertebrale ?? false" />
            <Character name="Docteur Poivre" image="Doc_poivre" :innocent="data?.character?.doc_poivre ?? false" />
            <Character name="Professeure Blanc Bec" image="Prof_blanc_bec"
                :innocent="data?.character?.prof_blanc_bec ?? false" />
            <Character name="Monsieur Lavande" image="Monsieur_lavande"
                :innocent="data?.character?.monsieur_lavande ?? false" />
            <Character name="Docteur Sulfurik" image="Docteur_sulfurik"
                :innocent="data?.character?.docteur_sulfurik ?? false" />
            <Character name="Mister Fleur Bleu" image="Mister_fleur_bleu"
                :innocent="data?.character?.mister_fleur_bleu ?? false" />
        </div>
        <h2 class="text">Armes du crime :</h2>
        <div class="cluelist" id="ammo">
            <Weapon name="Fraise Nociberry" image="placeholder" :innocent="data?.weapon?.fraise ?? false" />
            <Weapon name="Berlingo Maléficus" image="placeholder" :innocent="data?.weapon?.berlingo ?? false" />
            <Weapon name="Arbalète" image="placeholder" :innocent="data?.weapon?.arbalete ?? false" />
            <Weapon name="Bouclier" image="placeholder" :innocent="data?.weapon?.bouclier ?? false" />
            <Weapon name="Binette" image="placeholder" :innocent="data?.weapon?.binette ?? false" />
            <Weapon name="Poinçon" image="placeholder" :innocent="data?.weapon?.poincon ?? false" />
        </div>
        <h2 class="text">Lieux du crime :</h2>
        <div class="cluelist" id="ammo">
            <Place name="Tiers Lieu de Carpentras" image="placeholder" :innocent="data?.place?.tierlieu ?? false" />
            <Place name="La Petite Fontaine" image="placeholder" :innocent="data?.place?.fontaine ?? false" />
            <Place name="Passage Boyer" image="placeholder" :innocent="data?.place?.boyer ?? false" />
            <Place name="Le Livre gourmand" image="placeholder" :innocent="data?.place?.livre ?? false" />
            <Place name="La maison Jouvaud" image="placeholder" :innocent="data?.place?.jouvaud ?? false" />
            <Place name="MJC Carpentras" image="placeholder" :innocent="data?.place?.mjc ?? false" />
            <Place name="Librairie Gulliver" image="placeholder" :innocent="data?.place?.gulliver ?? false" />
            <Place name="Inguimber-tine" image="placeholder" :innocent="data?.place?.inguimbertine ?? false" />
            <Place name="Mairie de Carpentras" image="placeholder" :innocent="data?.place?.mairie ?? false" />
        </div>

    </div>
</template>

<style scoped>
.cluelist {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#mainpage {
    flex-direction: column;
    justify-content: space-evenly;
    overflow: scroll;
}

h1,
h2,
h3 {
    padding-left: 5px;
}

h3 {
    font-style: italic;
}

#map {
    height: 25vh;
    width: calc(100% - 10px);
    margin: 5px;
    border-radius: 5px;
}
</style>