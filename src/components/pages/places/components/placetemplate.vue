<template>
    <div id="mainpage">
        <h1 class="text title">{{ props.place.name }}</h1>
        <figure>
            <figcaption class="text">Version audio :</figcaption>
            <audio controls :src="`/audio/${props.audio}`"></audio>
        </figure>
        <slot />
        <h2 class="text subtitle">Nouveaux indices :</h2>
        <div class="cluelist" id="clue">
            <Card v-for="clue in clues" :name="clue.name" :image="clue.image" />
        </div>
        <h2 class="text">Prochain Lieu :</h2>
        <h3 class="text">{{ places.getById(data.next).name }}</h3>
        <MapComponent :x="coor.x" :y="coor.y" :zoom="19" :points="[places.getById(data.next)]" id="map" />
    </div>
</template>

<script setup lang="ts">
// Place template component for the game
// This component displays the place information, audio, clues, and a map
// It also manages the game state and updates the local storage
import character from '../../../../data/character';
import type { Place } from '../../../../data/places';
import places from '../../../../data/places';
import weapon from '../../../../data/weapon';
import MapComponent from "../../../map/index.vue";
import Card from './card.vue';
var coor = { x: 0, y: 0 }
const clues: { name: string, image: string }[] = []

interface Props {
    audio: string,
    place: Place
}
const props = defineProps<Props>()

const data = JSON.parse(localStorage.getItem("data") ?? "{}")
// Initialize data if it doesn't exist or is incomplete
if (!data || data.next === undefined || data.next === props.place.id) {
    data.next = props.place.id - 1
    if (data.next < 0) data.next = 7
    data.previous = props.place.id
    // Check if all places are visited
    if (Object.values(data.place).filter(value => value === true).length === 8) {
        // If all places are visited, set next to 8 (end of game)
        data.next = 8
    }

    if (data.place === undefined) data.place = {}
    if (data.character === undefined) data.character = {}
    if (data.weapon === undefined) data.weapon = {}
    setData(data)

    localStorage.setItem("data", JSON.stringify(data))
} else if (data.previous !== props.place.id) {
    document.location.assign(document.location.origin)
}

getIndices(data)

if (data.next === 8) {
    coor = {
        x: 44.055697,
        y: 5.047724
    }
}

// Get the indices of the clues and coordinates based on the place
// This function updates the clues array and the coordinates based on the place id
function getIndices(data: any) {
    switch (props.place.id) {
        case 0:
            clues.push(places.mairie, weapon.bouclier)
            coor = {
                x: 44.055514,
                y: 5.049846
            }
            break
        case 1:
            clues.push(places.boyer, weapon.binette, character.monsieur_lavande)
            coor = {
                x: 44.055446,
                y: 5.048837
            }
            break
        case 2:
            clues.push(places.gulliver, character.mister_fleur_bleu)
            coor = {
                x: 44.055253,
                y: 5.048116
            }
            break
        case 3:
            clues.push(
                places.jouvaud,
                weapon.fraise
            )
            coor = {
                x: 44.054966,
                y: 5.046370
            }
            break
        case 4:
            clues.push(
                places.fontaine,
                character.doc_poivre
            )
            coor = {
                x: 44.055249,
                y: 5.047445
            }
            break
        case 5:
            clues.push(
                places.inguimbertine,
                weapon.poincon
            )
            coor = {
                x: 44.054775,
                y: 5.046767
            }
            break
        case 6:
            clues.push(
                places.mjc,
                weapon.arbalete,
                character.prof_blanc_bec
            )
            coor = {
                x: 44.051512,
                y: 5.048609
            }
            break
        case 7:
            clues.push(
                places.tierlieu,
                character.docteur_sulfurik
            )
            coor = {
                x: 44.053912,
                y: 5.048481
            }
            break
    }
    return data
}

// Set the data based on the place id
// This function updates the data object with the place, character, and weapon information
function setData(data: any) {
    {
        switch (props.place.id) {
            case 0:
                data.place.mairie = true
                data.weapon.bouclier = true
                break
            case 1:
                data.place.boyer = true
                data.weapon.binette = true
                data.character.monsieur_lavande = true
                break
            case 2:
                data.place.gulliver = true
                data.character.mister_fleur_bleu = true
                break
            case 3:
                data.place.jouvaud = true
                data.weapon.fraise = true
                break
            case 4:
                data.place.fontaine = true
                data.character.doc_poivre = true
                break
            case 5:
                data.place.inguimbertine = true
                data.weapon.poincon = true
                break
            case 6:
                data.place.mjc = true
                data.weapon.arbalete = true
                data.character.prof_blanc_bec = true
                break
            case 7:
                data.place.tierlieu = true
                data.character.docteur_sulfurik = true
                break
        }
        return data
    }
}

</script>

<style scoped>
#mainpage {
    flex-direction: column;
    justify-content: space-evenly;
    overflow: scroll;
}

.title {
    margin-left: 10px;
}

.cluelist {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#map {
    height: 25vh;
    width: calc(100% - 10px);
    margin: 5px;
    border-radius: 5px;
}

.text {
    margin-left: 5px;
}
</style>