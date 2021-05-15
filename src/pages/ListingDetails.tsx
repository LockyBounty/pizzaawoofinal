import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { Pizzas, Topping, Drink } from "../utils/Recipe";


import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';

import '../styles/global.scss';

  
  function ListingDetails() {
    let { id } = useParams();
    const recipe = Pizzas.find((p) => p.id === parseInt(id, 10));
    //parseInt(number, radix) 
    //le 10 en radix pour convertir correctement en "octal literral"
  
    return (
      <div className="">
        <div className="">
          <h3>ID: {recipe.name}</h3>
          
          <h1>{id}</h1>

        </div>
        <div className="details-topping-zone">
          <h3>Topping zone</h3>
          
          {
            Topping.map((topping, index)=>(
              <Paper
              key={index}
              color="primary"
              elevation={0}
              className="details-topping-zone-element"
              >
                
                  <div className="product-avatar-box">
                    <img 
                    src="../assets/img/vegetable/cheese_01.png" 
                    />
                  </div>
                
                {topping.name}
            
              </Paper>
            ))
          }
        </div>
      </div>
    );
  }
  
  export default ListingDetails;
  