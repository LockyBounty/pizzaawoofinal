import { useState, useReducer } from 'react';
import  {Recipe, Topping}  from '../utils/Recipe';

function Login(){

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    const onChangeMail = (event) => {
        setMail(event.target.value);
      };
    const onChangePass = (event) => {
    setPass(event.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (!e.target.checkValidity()) {
            // form is invalid! so we do nothing
            return;
          }
        
        const data = new FormData(e.target);
         
        data.set('email', mail);
        data.set('pass', pass);

    
        console.log(data.get("email"))
        console.log(Object.fromEntries(data))

        
    }
    


    return (
        <div className="loginMain">
            <div className="return">
                <a href="/">Retour</a>
            </div>
            <div className="loginInside">
                <h2>CONNEXION</h2>
                Pas de compte ? <a href="./Subscription">S'inscrire</a>
                <form onSubmit={handleSubmit} method="post" name="login1">
                    
                        <input type="email" 
                        name="email" 
                        id="email1"
                        placeholder="Email"
                        onChange={onChangeMail}
                        value={mail}
                        />
                    
                    
                    
                        <input type="password" 
                        name="pass" 
                        id="pass1"
                        placeholder="Mot de passe"
                        onChange={onChangePass}
                        value={pass}
                        />
                    
                    <button type="submit">Valider</button>
                </form>
            </div>
            <div>
                {Topping}
                
            </div>
            
        </div>
    );
}



//Exemple envoi vers back 
// function handleSubmit(e) {
//     e.preDefault();
//     const data = new FormData(e.target);
//     // NOTE: you access FormData fields with `data.get(fieldName)`    
//     const [month, day, year] = data.get('birthdate').split('/');
//     const serverDate = `${year}-${month}-${day}`;
//     data.set('birthdate', serverDate);
//     data.set('username', data.get('username').toUpperCase());
//     fetch('/api/form-submit-url', {
//       method: 'POST',
//       body: data,
//     });
// }


export default Login;