
import React from 'react';
import {Button} from '@material-ui/core'

function test(){return console.log("lol")}

const About = () => (

<div>

    Ici, c'est About page

    <Button 
    variant="contained"
    color="secondary" 
    onClick={test}
    >About me
    </Button>
</div>
)

function Item(props) {
    return <li>{props.message}</li>;
  }
  
  function TodoList() {
    const todos = ['finir la doc', 'envoyer la pr', 'tanner Chris pour une revue'];
    return (
      <ul>
        {todos.map((message) => <Item key={message} message={message} />)}
      </ul>
    );
  }

export default TodoList;
