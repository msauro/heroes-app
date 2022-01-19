import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../form/useForm";
import { HeroCard } from "../hero/HeroCard";
import { getHeroByName } from "../selectors/getHeroByName";
import queryString from 'query-string';
import { useMemo } from "react";

export const SearchScreen = () => {

   const navigate = useNavigate();
   const location = useLocation();

   const {q} = queryString.parse(location.search);
   
    const [ formValues, handleInputChange ] = useForm( {
        searchText: q,

    } );

    const {searchText} = formValues;
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    const heroFiltered = useMemo ( () => getHeroByName(q), [q]);


    return (
        <>  
            <div className="container">
                <h1>SearchScreen</h1>
                <form className="row col-2" onSubmit={handleSubmit}>
                    <input 
                    type="text" placeholder="Buscar héroe" name="searchText" className="form-control" value={searchText} onChange={handleInputChange}>

                    </input>
                    <button className="btn btn-primary mt-2" type="submit" onClick={handleSubmit}>Buscar</button>
                </form>
            </div>
            <div className="mt-5 row ">
                {
                    (heroFiltered.length === 0) ? <div className="alert alert-info">No hay resultados</div> 
                    : (q === '') && 
                    <div className="alert alert-info">Buscar heroe</div>

                }
                {
                    heroFiltered.map(hero=>(
                        <HeroCard key={hero.id} {...hero} />    

                    ))
                    
                }
            </div>    
        </>
    )
}