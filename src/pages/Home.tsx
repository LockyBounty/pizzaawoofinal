
import React, { useState, useEffect } from 'react';



const Tester = ()=>(
    <div>
        
    </div>
)

function Example() {
  const [count, setCount] = useState(0);

  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    let test = document.getElementsByClassName("lol") ;
    test[0].innerHTML = `Vous avez cliqué ${count} fois ici`;
  });

  return (
    <div>
        <h2 className="lol"></h2>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}




const Home = () => (

<div>

    Ici, c'est la home page

    <Example />
</div>
 
);


export default Home;
