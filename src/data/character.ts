type CharacterKey = "colo_vertebrale" | "doc_poivre" | "prof_blanc_bec" | "monsieur_lavande" | "docteur_sulfurik" | "mister_fleur_bleu"

export interface Character {
    name: string;
    image: string
}
/**
 * Character data for the game, including names and images url.
 */
const Character: Record<CharacterKey, Character> = {
    colo_vertebrale: {
        name: "Colonel vertebrale",
        image: "caracteres/Colo_vertebrale.png",
    },
    doc_poivre: {
        name: "Docteur Poivre",
        image: "caracteres/Doc_poivre.png",
    },
    prof_blanc_bec: {
        name: "Professeure Blanc Bec",
        image: "caracteres/Prof_blanc_bec.png",
    },
    monsieur_lavande: {
        name: "Monsieur Lavande",
        image: "caracteres/Monsieur_lavande.png",
    },
    docteur_sulfurik: {
        name: "Docteur Sulfurik",
        image: "caracteres/Docteur_sulfurik.png",
    },
    mister_fleur_bleu: {
        name: "Mister Fleur Bleu",
        image: "caracteres/Mister_fleur_bleu.png",
    }
}

export default {
    ...Character
}