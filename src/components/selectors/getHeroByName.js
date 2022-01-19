import { heroes } from "../../data/heroes"



export const getHeroByName = (name = '') =>{
    if(name.length === 0 ){
        return [];
    }
    
    const heroFiltered = name.toLowerCase();

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(heroFiltered));

}
