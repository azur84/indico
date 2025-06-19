type weaponKey = "fraise" | "berlingo" | "arbalete" | "bouclier" | "binette" | "poincon"

export interface Weapon {
    name: string;
    image: string
}

/**
 * Weapon data for the game, including names and images url.
 */
const Weapon: Record<weaponKey, Weapon> = {
    fraise: {
        name: "Fraise Nociberry",
        image: '/weapon/placeholder.png'
    },
    berlingo: {
        name: "Berlingo Maléficus",
        image: '/weapon/placeholder.png'
    },
    arbalete: {
        name: "Arbalète",
        image: '/weapon/placeholder.png'
    },
    bouclier: {
        name: "Bouclier",
        image: '/weapon/placeholder.png'
    },
    binette: {
        name: "Binette",
        image: '/weapon/placeholder.png'
    },
    poincon: {
        name: "Poinçon",
        image: '/weapon/placeholder.png'
    }
}

export default {
    ...Weapon
}