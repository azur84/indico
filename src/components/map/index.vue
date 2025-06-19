<template>
    <div class="map" ref="map">

    </div>
</template>

<script setup lang="ts">
// Map component using Leaflet
import L from "leaflet";
import { onMounted, ref, useTemplateRef } from "vue";

interface Props {
    x: number
    y: number
    zoom: number
    points?: { x: number, y: number, name: ((layer: L.Layer) => L.Content) | L.Content | L.Popup }[]
}

const props = withDefaults(defineProps<Props>(), { points: () => [] })

// Get the map div reference
// Use `useTemplateRef` to get a reference to the map div
const mapdiv = useTemplateRef("map")
const map = ref<L.Map>()
const markers = ref<L.Marker[]>([])

onMounted(() => {
    // Integrate Leaflet Api
    map.value = L.map(mapdiv.value!).setView([props.x, props.y], props.zoom)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        minZoom: 14,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map.value);

    // Add points to the map
    if (props.points.length != 0) {
        const colordif = 360 / props.points.length

        markers.value = props.points.map((coor, index) => {
            const marker = L.marker([coor.x, coor.y]).addTo(map.value!)
            marker.bindPopup(coor.name)
            marker.setOpacity(0.7)
            const element = marker.getElement()
            if (element) element.style.filter = `hue-rotate(${Math.floor(index * colordif)}deg)`
            return marker
        })
    }
})

// Expose the map and markers to the parent component
// This allows the parent component to interact with the map and markers
defineExpose({
    map,
    markers
})

</script>
<style scoped>
.map {
    overflow: hidden;
}
</style>
<style>
.leaflet-control-attribution {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>