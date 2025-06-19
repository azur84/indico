<template>
    <Placetemplate audio="MJC.wav" :place="places.mjc">
        <div class="dialog_contener">
            <dl>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">C’est calme. Trop calme pour une scène de crime.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Les animateurs disent qu’ils n’ont rien remarqué d’inhabituel ces derniers jours. Et le
                    registre des
                    prêts d’équipement n’a pas bougé depuis vendredi.</dd>
                <dt class="text">Docteur Sulfurik :</dt>
                <dd class="text">Pourtant, cette arbalète aurait de quoi faire du dégât… si elle avait quitté son
                    crochet.</dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Toujours accrochée, droite comme un I. Poussière intacte sur le bois. Même la corde est
                    détendue.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Et pourtant, j’étais ici ce jour-là. La stagiaire coréenne m’a vue, oui. Mais elle n’a
                    jamais dit que
                    j’avais touché quoi que ce soit.</dd>
                <dt class="text">Docteur Sulfurik :</dt>
                <dd class="text">C’est bien ton genre, ça, Blanc-Bec. Toujours à expliquer un meurtre pendant que les
                    autres essaient
                    de le commettre.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">J’animais un atelier sur les codes secrets. Salle polyvalente du fond. Et l’arbalète ?
                    Elle n’a pas
                    quitté ce mur.</dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Le dernier à avoir signé pour une activité de tir date de trois semaines. Et le stylo
                    est sec.</dd>
                <dt class="text">Docteur Sulfurik :</dt>
                <dd class="text">Même les gamins ne s’en servent plus. Elle est là pour faire joli.</dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Bon. Trop propre, trop rangé. Trop tranquille. Ça colle pas avec ce qu’on cherche.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Et l’arbalète n’a pas tiré un seul carreau. Ça s’entend.</dd>
                <dt class="text">Docteur Sulfurik :</dt>
                <dd class="text">Les armes silencieuses laissent quand même des traces. Ici… aucune.</dd>
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