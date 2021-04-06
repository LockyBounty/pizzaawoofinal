import { Pizzas, Topping, Drink } from "../utils/Recipe";
import React, { useState } from "react";

import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import "../styles/global.scss"

export function Custom() {
  // const [pizza, setPizza] = useState(Pizzas[0].recette);
  const [pizza, setPizza] = useState([]);
  const [toppingList, setToppingList]= useState(Topping);
  const [drinkList, setDrinkList]= useState(Drink);

  

  function onHandleChange(index) {
    let arr = [...toppingList];
    arr[index].checked = !toppingList[index].checked;
    setToppingList(arr);
  }
  function onHandleChange2(index) {
    let arr = [...drinkList];
    arr[index].checked = !drinkList[index].checked;
    setDrinkList(arr);
  }
  return (
    <div className="pizza_zone">
      {/* {console.log(pizza)} */}
      <div>
        <h2>pizza zone</h2>
        <div>
          <p>{Pizzas[0].name}</p>
          <ul>
            {Pizzas[0].recipe.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="topping_zone">
        <h2>ingredient zone</h2>

        <div>

        {/*boucle sur checkbox de Material UI*/}
        <FormGroup>
        {toppingList.map((supplement, i) => 
            (
              <FormControlLabel
                key={i}
                control={
                  <Checkbox
                    checked={supplement.checked}
                    onChange={()=>onHandleChange(i)}
                    name={supplement.name} 
                    color="primary"
                    size="small"
                  />
                }
                label={supplement.name} 
                />
            ))}

        
        </FormGroup>
        {/*****************************************/}

        </div>

        <div className="drink_zone">
          <h2>Drink Zone</h2>
          <FormGroup>
            {Drink.map((drink, i) => 
                (
                  <FormControlLabel
                    key={i}
                    control={
                      <Checkbox
                        checked={drink.checked}
                        onChange={()=>onHandleChange2(i)}
                        name={drink.name} 
                        color="primary"
                        size="small"
                      />
                    }
                    label={drink.name} 
                    />
                ))}

            
            </FormGroup>
        </div>
        {/*<button onClick={() => setPizza(pi + 1)}>click</button>*/}
      </div>
          
    </div>
  );
}
