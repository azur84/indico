<template>
    <Placetemplate audio="Mairie.wav" :place="places.mairie">
        <div class="dialog_contener">
            <dl>
                <dt class="text">Prof Blanc-Bec :</dt>
                <dd class="text">Voici donc le premier endroit où mène notre enquête.</dd>
                <dt class="text">M. Lavande :</dt>
                <dd class="text">Impressionnant... On s'attendait presque à voir le maire surgir de derrière un rideau.
                </dd>
                <dt class="text">Doc Sulfurik :</dt>
                <dd class="text">Si le crime s’est vraiment joué ici, il a été d’une discrétion admirable.</dd>
                <dt class="text">Prof Blanc-Bec :</dt>
                <dd class="text">Le socle est là. Le fameux petit GRAND bouclier… il n’a pas dû voir beaucoup d’action
                    ces
                    derniers
                    temps</dd>
                <dt class="text">M. Lavande :</dt>
                <dd class="text">Sulfurik, t’as vu ? Aucune marque autour, rien au sol. Même les joints sont pleins de
                    poussière.</dd>
                <dt class="text">Doc Sulfurik :</dt>
                <dd class="text">Hmm… Pas un objet qu’on aurait manié dans la précipitation. Même un voleur l’aurait
                    ignoré.
                    Le gardien
                    nous a regardés comme si on venait d’accuser son enfant. Il dit que ce bouclier n’a pas quitté son
                    socle
                    depuis... 40 ans.</dd>
                <dt class="text">M. Lavande :</dt>
                <dd class="text">Vu la poussière qu’il y a dessus, j’aurais tendance à le croire.</dd>
                <dt class="text">Prof Blanc-Bec :</dt>
                <dd class="text">Et aucune trace d’impact. Ni griffure, ni empreinte déplacée</dd>
                <dt class="text">M. Lavande :</dt>
                <dd class="text">Peut-être que… ce n’était pas le bon moment pour frapper ici ?</dd>
                <dt class="text">Doc Sulfurik :</dt>
                <dd class="text">Ou pas le bon endroit. Ça ne sent ni la peur, ni l’urgence. Juste… la paperasse.</dd>
                <dt class="text">Prof Blanc-Bec :</dt>
                <dd class="text">On ne peut rien conclure. Mais on peut remarquer ce qui manque.</dd>
                <dt class="text">M. Lavande :</dt>
                <dd class="text">Et ce qui est resté… exactement à sa place.</dd>
                <dt class="text">Doc Sulfurik :</dt>
                <dd class="text">Bien, rien d’autre ici. Passons à un lieu où les murs parlent un peu plus.</dd>
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