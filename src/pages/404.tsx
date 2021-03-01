import logo from '../assets/img/PngItem.png';
import Button from '@material-ui/core/Button';
import '../styles/staticPages.scss';

const Page404 = () => 
(
<div className="main_404">
    <div className="fof_img">
        <img src={logo} alt=""/>
    </div>
    <div className="fof_text">
        <h1>Awoo ? La page n'a pas été trouvée !</h1>
        
        <Button variant="contained" color="secondary">
            Retour à l'accueil</Button>
    </div>

</div>
)


export default Page404;