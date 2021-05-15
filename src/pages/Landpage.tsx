//eslint-disable-line

import "../styles/landpage.scss";
import Listing from "./Listing"



function LandPage(){

 
  
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
            <div>
              
            </div>
          </div>
        </div>

        <Listing />
      </div>
      
    </div>
  </div>

)

};


export default LandPage;