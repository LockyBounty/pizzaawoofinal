
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { Pizzas } from '../utils/Recipe'
import "../styles/listing.scss"


const Listing = () => 
<div className="pizza_main">

    <div className="pizza_list">
        {
            Pizzas.map((pizza, index)=> (
                <Card 
                className="pizza_list_card"
                key={index}>
                    <CardContent>

                    
                        <h3>{pizza.nom}</h3>
                        <p>
                            <ul>
                                {pizza.recette.map((ingredient)=> 
                                <li>
                                    <Chip 
                                    //variant="outlined" 
                                    className="pizza_list_chip"
                                    color="primary"
                                    size="small"
                                    label={ingredient}/>
                                </li>
                                )}
                            </ul>
                        </p>
                        <p>{pizza.prix} €</p>
                    </CardContent>
                </Card>
            ))
        }

    </div>
</div>
;

export default Listing;