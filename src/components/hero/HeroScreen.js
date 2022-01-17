import { Navigate, useParams } from "react-router-dom"
import { getHeroeById } from "../selectors/getHeroeById";
import { HeroCard } from "./HeroCard";
import { HeroInfo } from "./HeroInfo";

export const HeroScreen = () => {

    const {heroId} = useParams();
    
    const heroe = getHeroeById(heroId);

    if (!heroe) {
        return <Navigate to='/' />
    }

    return (
        <div>
            <h1>Hero</h1>            
            <HeroInfo key={heroe.id} {...heroe} />
        </div>
    )
}
