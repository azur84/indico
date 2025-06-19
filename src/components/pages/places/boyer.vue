<template>
    <Placetemplate audio="" :place="places.boyer">
        <div class="dialog_contener">
            <dl>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Ce passage… a dû en voir passer des histoires depuis 1857. C’est presque un théâtre à
                    ciel couvert.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">On a vérifié chaque endroit. Dalles, vitrines, recoins derrière les enseignes… Rien
                    n’indique que quelque chose s’y serait tramé.</dd>
                <dt class="text">Dr Sulfurik :</dt>
                <dd class="text">Sauf peut-être la vieille dame à l’écharpe rose la bas. Elle m’a suivi du regard comme
                    si j’avais glissé un poison dans mon thé…</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Et tu en avais ?</dd>
                <dt class="text">Dr Sulfurik :</dt>
                <dd class="text">Juste de la menthe et du cynorhodon. Le poison, je le garde pour les hypothèses.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">L’arme supposée… cette binette rouillée. Elle n’a pas quitté la vitrine du fleuriste
                    depuis au moins dix ans.</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Et d’après la patronne, elle a été déplacée une seule fois... pour épousseter.</dd>
                <dt class="text">Dr Sulfurik :</dt>
                <dd class="text">J’ai vu Lavande, plus tôt. Il arpentait les lieux, pressé, le regard ailleurs. Mais pas
                    perturbé comme s’il avait commis un crime.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Il était là, oui. Mais occupé à autre chose… il essayait de suivre une trace, pas d’en
                    laisser une.</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Rien ici ne s’accorde avec l’heure supposée des faits. Ni dans les gestes, ni dans les
                    silences.</dd>
                <dt class="text">Dr Sulfurik :</dt>
                <dd class="text">Sur ce, passons à une autre scène.</dd>
            </dl>
        </div>
    </Placetemplate>
</template>

<script setup lang="ts">
import places from '../../../data/places';
import Placetemplate from './components/placetemplate.vue';
</script>

<style scoped>
dt,
dd {
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

dt {
    font-weight: bold;
}

dd {
    margin-left: 15px;
    margin-bottom: 7px;
    text-align: justify;
    font-size: 0.8em;
}

dd::before {
    content: "- ";
}

dl {
    background-color: rgba(0, 0, 0, 0.566);
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 0px;
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