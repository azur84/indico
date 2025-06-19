type PlacesId = "mairie" | "boyer" | "gulliver" | "jouvaud" | "fontaine" | "inguimbertine" | "mjc" | "tierlieu" | "livregourmand"

export interface Place {
    id: number;
    x: number;
    y: number;
    name: string;
    image: string;
}

/**
 * Place data for the game, including coordinates, names, and images url.
 */
const Places: Record<PlacesId, Place> = {
    mairie: {
        id: 0,
        x: 44.055445,
        y: 5.048738,
        name: 'Mairie de Carpentras',
        image: '/places/placeholder.png'
    },

    boyer: {
        id: 1,
        x: 44.055325,
        y: 5.048068,
        name: 'Passage Boyer',
        image: '/places/placeholder.png'
    },

    gulliver: {
        id: 2,
        x: 44.055009,
        y: 5.046313,
        name: 'Librairie Gulliver',
        image: '/places/placeholder.png'
    },

    jouvaud: {
        id: 3,
        x: 44.0551806,
        y: 5.0472683,
        name: 'La maison Jouvaud',
        image: '/places/placeholder.png'
    },

    fontaine: {
        id: 4,
        x: 44.054790,
        y: 5.046732,
        name: 'La Petite Fontaine',
        image: '/places/placeholder.png'
    },

    inguimbertine: {
        id: 5,
        x: 44.051472,
        y: 5.048553,
        name: 'Inguimbertine',
        image: '/places/placeholder.png'
    },

    mjc: {
        id: 6,
        x: 44.053965,
        y: 5.048422,
        name: 'MJC Carpentras',
        image: '/places/placeholder.png'
    },

    tierlieu: {
        id: 7,
        x: 44.055493,
        y: 5.049835,
        name: 'Tiers Lieu de Carpentras',
        image: '/places/placeholder.png'
    },

    livregourmand: {
        id: 8,
        x: 44.055753,
        y: 5.047858,
        name: 'Le Livre gourmand',
        image: '/places/placeholder.png'
    },

}

export default {
    ...Places,

    getPoints() {
        return Object.values(Places)
    },

    getById(id: number) {
        return Object.values(Places)[id]
    }
}
