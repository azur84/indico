import type { DefineComponent } from "vue";
import Main from "./main.vue";
import Credit from "./credit/credit.vue";
import Mairie from "./places/mairie.vue";
import Tierlieu from "./places/tierlieu.vue";
import Mjc from "./places/mjc.vue";
import Inguimbertine from "./places/inguimbertine.vue";
import Fontaine from "./places/fontaine.vue";
import Jouvaud from "./places/jouvaud.vue";
import Gulliver from "./places/gulliver.vue";
import Boyer from "./places/boyer.vue";

// List of pages in the application
// Each page is a Vue component that can be imported and used in the application

type PagesList = {
    [key: string]: DefineComponent
}
export default {
    Main,
    Credit,
    Mairie, // TWFpcmll
    Tierlieu, // VGllcmxpZXU=
    Mjc, // TWpj
    Inguimbertine, // SW5ndWltYmVydGluZQ==
    Fontaine, // Rm9udGFpbmU=
    Jouvaud, // Sm91dmF1ZA==
    Gulliver, // R3VsbGl2ZXI=
    Boyer, // Qm95ZXI=
} as unknown as PagesList