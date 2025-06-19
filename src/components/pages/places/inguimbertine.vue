<template>
    <Placetemplate audio="" :place="places.inguimbertine">
        <!-- \([a-z’é,èàê ]+\) -->
        <div class="dialog_contener">
            <dl>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">J’oublie à quel point cet endroit est solennel. L’air lui-même semble plus lourd ici.
                </dd>
                <dt class="text">Professeure Blanc-Bec</dt>
                <dd class="text">Normal. Le silence est imposé dès l’entrée. Et le respect du lieu… est non négociable.
                </dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Nos collègues allemands ont fouillé chaque recoin. Fonds anciens, archives, même les
                    réserves au
                    sous-sol. Rien.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Le documentaliste les a aidés. Il tient l’inventaire au jour près.</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Le poinçon était là ?</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Sous verre. Exposé pour une démonstration scolaire sur l’imprimerie. Il n’a pas bougé.
                </dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Le genre d’outil discret… mais efficace. S’il venait à disparaître, quelqu’un s’en
                    serait rendu
                    compte.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Ici, on remarque même si une feuille de papier change d’angle.</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">L’endroit est trop calme. Trop surveillé. Et l’arme trop statique. Pas un poil de
                    déplacement.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Dernière manipulation : il y a six jours. Pour une classe de CM2. Depuis, il n’a pas
                    quitté ce
                    présentoir.</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Pas un mouvement suspect. Pas une empreinte récente.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Même la vitre est propre. C’est presque trop parfait.</dd>
                <dt class="text">Dr Poivre :</dt>
                <dd class="text">Mais pas suspect. Juste… ordonné.</dd>
                <dt class="text">Professeure Blanc-Bec :</dt>
                <dd class="text">Comme les bibliothèques doivent l’être.</dd>
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