import { heroes } from "../../data/heroes"



export const getHeroByName = (name = '') => {
    const heroFiltered = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.includes(heroFiltered))
        
    
}
