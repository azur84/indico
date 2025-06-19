<template>
    <Placetemplate audio="" :place="places.jouvaud">
        <div class="dialog_contener">
            <dl>
                <dt class="text">Mr Lavande :</dt>
                <dd class="text">Voilà un endroit qui donne plus envie de commettre un péché de gourmandise qu’un
                    crime...</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">Hmmm… je comprends pourquoi tout le monde en parle. C’est presque criminel de faire des
                    fraises aussi brillantes...</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Ce n’est pas la fraise qui m’inquiète, mais ce qu’elle aurait pu contenir. Vous savez
                    ce que la branche norvégienne a retrouvé ici ?</dd>
                <dt class="text">Mr Lavande :</dt>
                <dd class="text">Non… une trace ? Une arme ?</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Pire. La Nocciberry. Une fraise expérimentale, instable, classée haut risque depuis les
                    années 80.</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">Qu’est-ce qu’une chose pareille fait dans un salon de thé ?</dd>
                <dt class="text">Mr Lavande :</dt>
                <dd class="text">Juste en la regardant, tu devrais comprendre FleurBleue, c'est la plus belle fraise qui m'ait été
                donnée de voir, sa forme est parfaite et elle est d'un rouge si vif… une vraie oeuvre d'art</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Stockée dans une capsule de verre, derrière une vitrine blindée. Aucune trace
                    d’ouverture, aucune réaction chimique… Elle n’a pas bougé d’un grain de sucre.</dd>
                <dt class="text">Mr Lavande :</dt>
                <dd class="text">Et personne ne l’a approchée ?</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">Juste les regards admiratifs des clients. Une fraise trop belle pour être vraie. Mais
                    trop protégée pour être touchée.</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Et trop surveillée pour être utilisée. Le personnel a des consignes strictes. Une
                    serveuse s’est même fait reprendre pour l’avoir essuyée un peu trop fort.</dd>
                <dt class="text">Mr Lavande :</dt>
                <dd class="text">Donc rien d’utile ?</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Rien d’exploitable.</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">Aller l'équipe, on ne se démotive pas, continuons sur le prochain lieu, notre enquête
                    avance plutôt bien.</dd>
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