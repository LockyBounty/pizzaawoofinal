
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CreateIcon from '@material-ui/icons/CreateOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingBasketOutlined';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import {Link} from 'react-router-dom';


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
                    <div>
                        <img className="pizza_img"
                        width="auto" height="200"
                        src={pizza.image}
                        alt={pizza.name}
                        />
                    </div>
                    <CardContent className="pizza_list_card_central_content">

                    
                        <h3>{pizza.name}</h3>
                        <p>
                            <ul>
                                {pizza.recipe.map((ingredient)=> 
                                <li>
                                    <Chip 
                                    //variant="outlined" 
                                    className="pizza_list_chip"
                                    //color="primary"
                                    size="small"
                                    label={ingredient.name}/>
                                </li>
                                )}
                            </ul>
                        </p>

                    </CardContent>
                    
                    <div className="card_button_zone">
                        <Chip 
                        className="pizza_price_chip"
                        color="primary"
                        label={`${pizza.price} €`} 
                        />
                        <div>
                            <Link to={`/pizzas/${pizza.id}`}>
                                <IconButton 
                                color="secondary">
                                    <ShoppingCartIcon /> 
                                </IconButton>
                            </Link>
                            <IconButton 
                            aria-label="modify"
                            color="primary">
                                <CreateIcon 
                                color="secondary"
                                />
                            </IconButton>

                        </div>
                    </div>
                </Card>
            ))
        }

    </div>
</div>
;

export default Listing;