import { useNavigate} from "react-router-dom";

export const HeroInfo = ({
    id, 
    superhero,
    publisher,
    alter_ego,
    characters,
    first_appearance,
}) => {
        const imgPath = `/assets/${id}.jpg`;
        var path = `/hero/${id}`;
        
        const navigate = useNavigate();
        const handleButton = ()=>{
            navigate(-1);
        }

        return (
       
            
                <div className="col-2 mt-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <img src={imgPath} className="card-img-top" alt={superhero}></img>
                            <p className="card-text">{publisher}</p>
                            <p className="card-text">{publisher}</p>
                            <p><small>{alter_ego}</small> </p>
                            <p><small>{first_appearance}</small> </p>
                            <p><small>{characters}</small> </p>
                            
                            <button className="btn btn-primary" onClick={handleButton}>Volver</button>
                        </div>
                    </div>
                </div>
            
    )
}
