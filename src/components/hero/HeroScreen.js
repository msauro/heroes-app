import { Navigate, useParams } from "react-router-dom"
import { getHeroeById } from "../selectors/getHeroeById";
import { HeroCard } from "./HeroCard";

export const HeroScreen = () => {

    const {heroId} = useParams();
    
    const heroe = getHeroeById(heroId);

    if (!heroe) {
        return <Navigate to='/' />
    }

    return (
        <div>
            <h1>Hero</h1>            
            <HeroCard key={heroe.id} {...heroe} idH='id' />
            
        </div>
    )
}
