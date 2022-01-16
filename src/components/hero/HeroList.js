import { getHeroesByPublisher } from "../selectors/getHeroByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {
    
    const heroes = getHeroesByPublisher(publisher);
    return (
        <div>
            <h1>Hero List - {publisher} </h1>
            <div className="row">
                
                {
                    
                    heroes.map( hero=>(
                        <HeroCard key={hero.id} {...hero} />
                        
                    ))
                }
            </div>
        </div>
    )
}
