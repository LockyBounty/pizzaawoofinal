import "../styles/landpage.scss";
import Listing from "./Listing"


import { useCookies } from "react-cookie";

function LandPage(){

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function handleSetCookie(){
    setCookie("user", "test", {path: '/'});
  }
  function handleRemoveCookie() {
    removeCookie("user");
  }
return (
<div className="landpage-main">
    <div className="landpage-section1">
      
      <div className="landpage-section1-second">
        <h3>Paiement en ligne facilité</h3>
        <div className="block-choice">
          <div className="block-choice-section1">
            <div>Livraison</div>
            <div>Take out</div>
          </div>
          <div className="block-choice-section2">
            <div>Input address + numero</div>
            <div>bouton commander</div>
          </div>
        </div>

        <Listing />
      </div>
      <div>
      {cookies.user}
      {console.log(cookies.user)}
      <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleRemoveCookie}>Remove Cookie</button>
      </div>
    </div>
  </div>

)

};


export default LandPage;