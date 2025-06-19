<template>
    <Placetemplate audio="" :place="places.fontaine">
        <div class="dialog_contener">
            <dl>
                <dt class="text">Mr Lavande :</dt>
                <dd class="text">On a du mal à croire qu’un meurtre ait pu être commis ici... Il y a des gens partout.
                </dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Justement. Trop de témoins. Trop de va-et-vient. Rien n’échappe aux yeux d’un serveur
                    pressé.</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">Ou aux oreilles d’une mamie curieuse. Écoute ça : elle a déjà vu trois chiens, deux
                    couples, et une
                    critique gastronomique.</dd>
                <dt class="text">Mr Lavande :</dt>
                <dd class="text">Et toujours pas d’indice... même pas une trace de bagarre ou un cri suspect ?</dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">Les collègues allemands ont retourné chaque serviette, interrogé le personnel, vérifié
                    les
                    réservations. Rien.</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">Et puis, qui viendrait commettre l’irréparable entre un risotto et un café crème ?</dd>
                <dt class="text">Mr Lavande :</dt>
                <dd class="text">Il y a bien eu un moment où j’ai cru voir une trace... mais c’était du coulis de
                    framboise.</dd>
                <dt class="text">Colonelle Vertébrale :</dt>
                <dd class="text">On ne va pas perdre plus de temps ici. Trop de témoins, trop de bruit, et pas assez de
                    vérité.</dd>
                <dt class="text">Mr FleurBleue :</dt>
                <dd class="text">C’est bon de pouvoir barrer un lieu. C’est rare, mais rassurant.</dd>
                <dt class="text">Mr Lavande :</dt>
                <dd class="text">Attendez, j’ai pas fini mon Perrier citron !</dd>
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