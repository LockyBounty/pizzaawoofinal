const Login = () => (   

<div>
    <h2>CONNEXION</h2>
    Pas de compte ? <a href="./Subscription">S'inscrire</a>
    <form onSubmit={handleSubmit} method="post" name="login1">
        <Email />
        <Pass />
        <button type="submit">Valider</button>
    </form>
    
</div>

);

const Email = () => (
    <div>
        <input type="email" name="email" id="email1"/>
    </div>
);

const Pass = () => (
    <div>
        <input type="password" name="pass" id="pass"/>
    </div>
);

function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0].value)
}



export default Login;