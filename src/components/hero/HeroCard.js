import { Link, Navigate } from "react-router-dom";

export const HeroCard = ({
    id, 
    superhero,
    publisher,
    alter_ego,
    characters,
    first_appearance,
    idH = 'null'
}) => {
        console.log('card');
        console.log(idH);
        const imgPath = `/assets/${id}.jpg`;
        var path = `/hero/${id}`;
        if(idH != null) {
            path= `(-1)`
        }

        return (
       
            
                <div className="col-3 mt-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <img src={imgPath} className="card-img-top" alt={superhero}></img>
                            <p className="card-text">{publisher}</p>
                            <p className="card-text">{publisher}</p>
                            <p><small>{first_appearance}</small> </p>
                            {
                            }
                            <Link to={path}>Mas..</Link>
                        </div>
                    </div>
                </div>
            
    )
}
