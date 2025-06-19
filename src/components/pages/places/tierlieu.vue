<template>
    <Placetemplate audio="Tierslieux.wav" :place="places.tierlieu">
        <div class="dialog_contener">
            <dl>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Voici donc le fameux tiers-lieu.</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">C’est cosy ici ! Franchement, j’aurais pas deviné qu’on enquêterait dans un endroit
                    aussi chill…
                </dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Ne te fie pas au canapé, FleurBleue. Même les lieux paisibles ont leurs secrets.</dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Mais celui-là a été retourné de fond en comble. Regardez cette étagère : encore marquée
                    d’étiquettes
                    déplacées. Nos équipes ont fouillé chaque tiroir.</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">Dr Sulfurik bossait ici ?</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">C’est ce qu’on m’a dit. Expériences, mélanges… le laboratoire improvisé est encore en
                    état.</dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Et là, les fioles. Alignées. Rien ne semble avoir quitté cet établi.</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">Même sa tasse est encore là. Vous avez vu ? Il boit son café de la main droite.</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Classique chez Sulfurik. Quand il est absorbé par ses formules, il ne bouge pas d’un
                    centimètre.
                </dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Sauf si c’est pour faire tout sauter.</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">Bah, pas ce jour-là, visiblement.</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Et à l’heure du crime, il était ici, concentré, il testait un truc dont lui seul a le
                    secret.</dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Trop concentré pour avoir mis un pied ailleurs.</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">On avance ? Le prochain lieu sera peut-être moins… zen.</dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Zen ou pas, les traces parleront.</dd>
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