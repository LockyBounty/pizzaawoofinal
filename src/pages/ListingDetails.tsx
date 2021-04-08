import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import { Pizzas } from "../utils/Recipe";
  
  function ListingDetails() {
    let { id } = useParams();
    const recipe = Pizzas.find((p) => p.id === parseInt(id));
  
    return (
      <div>
        <h3>ID: {recipe.name}</h3>
        
        <h1>{id}</h1>
      </div>
    );
  }
  
  export default ListingDetails;
  