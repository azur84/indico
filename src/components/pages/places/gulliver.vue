<template>
    <Placetemplate audio="" :place="places.gulliver">
        <div class="dialog_contener">
            <dl>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">14h32, librairie Gulliver. Inspection des lieux terminée. Aucun élément anormal.</dd>
                <dt class="text">M. FleurBleue :</dt>
                <dd class="text">Faut dire, c’est pas exactement un repaire de malfrats ici. Vous avez vu cette édition
                    de Tintin au Tibet ? Je l’ai cherchée pendant des années.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Je laisse les histoires à bulles aux rêveurs. Les miennes se résolvent sur le terrain.
                    Es-tu déjà venu ici avant ?</dd>
                <dt class="text">M. FleurBleue :</dt>
                <dd class="text">J’y suis venu, c’est vrai. Mais pas pour ce qu’on croit. J’étais déjà là bien avant que
                    l’affaire n’éclate.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">C'est ce que dit la libraire, la stagiaire. Et la dame au pull bleu là-bas. Tous t'ont
                    vu… plongé dans tes bulles à l'heure supposée du meurtre, tu as un solide alibi.</dd>
                <dt class="text">M. FleurBleue :</dt>
                <dd class="text">On peut pas être au four et au moulin, Professeure. Surtout quand on est assis depuis
                    une heure à suivre les aventures d’un reporter belge et d’un capitaine à la barbe mal taillée.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Hm. Rien n’a bougé ici. Pas une étagère déplacée, pas une ombre en trop. Si quelque
                    chose s’est joué aujourd’hui… ce n’était pas entre ces murs.</dd>
                <dt class="text">M. FleurBleue :</dt>
                <dd class="text">Vous devriez jeter un œil à cette BD-là. Y'a un complot, pas mal de rebondissements, et
                    même un trésor caché. Ça vous plairait.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Sans façon, allons-y, hâtons-nous.</dd>
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