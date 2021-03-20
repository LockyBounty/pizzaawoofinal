import "../styles/listing.scss"

import { Pizzas } from '../utils/Recipe'

const Listing = () => 
<div className="pizza_main">

    <div className="pizza_list">
        {
            Pizzas.map((pizza, index)=> (
                <div className="pizza_card" key={index}>
                    <h3>{pizza.nom}</h3>
                    <p>
                        <ul>
                            {pizza.recette.map((ingredient)=> 
                            <li>{ingredient}</li>
                            )}
                        </ul>
                    </p>
                    <p>{pizza.prix} €</p>
                </div>
            ))
        }

    </div>
</div>
;

export default Listing;