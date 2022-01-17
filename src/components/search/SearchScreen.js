import { useNavigate } from "react-router-dom";
import { useForm } from "../form/useForm";
import { HeroCard } from "../hero/HeroCard";
import { getHeroByName } from "../selectors/getHeroByName";

export const SearchScreen = () => {

   const navigate = useNavigate();

    const [ formValues, handleInputChange, reset ] = useForm( {
        searchText: '',

    } );

    const {searchText} = formValues;
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }
    const heroFiletered = getHeroByName('searchText');

    return (
        <>  
            <div>
                <h1>SearchScreen</h1>
                <form className="row col-2" onSubmit={handleSubmit}>
                    <input 
                    type="text" placeholder="Buscar héroe" name="searchText" className="form-control" value={searchText} onChange={handleInputChange}>

                    </input>
                    <button className="btn btn-primary mt-2" type="submit" onClick={handleSubmit}>Buscar</button>
                </form>
            </div>
            <div>
                {
                    heroFiletered.map(hero=>(
                        <HeroCard key={hero.id} {...hero} />    

                    ))
                    
                }
            </div>    
        </>
    )
}