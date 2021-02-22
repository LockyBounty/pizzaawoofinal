import './footer.scss';

const Footer = () => (
  <div className="footer-main">
    <div className="footer-first">
      <div>
        <ul>
          <h3>À propos de Pizza Awoo</h3>
          <li>La marque</li>
          <li>emploi</li>
          <li>Franchise</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
          <ul>
            <h3>Commandez en ligne</h3>
            <li>Livraison</li>
            <li>Take out</li>
          </ul>
      </div>
      <div>
          <ul>
            <h3>Nos restaurants</h3>
            <li>Où nous trouver</li>
            <li>La carte de menu</li>
            <li>Student Deals</li>
          </ul>
      </div>
    </div>
    <div className="footer-second">
      <div className="footer-social">
        <ul>
          <li>fb</li>
          <li>yt</li>
          <li>ig</li>
        </ul>
      </div>
      <div className="footer-signature">
        <h5>@2021 Pizza Awoo</h5>
      </div>
      <div className="footer-rules">
        <a href="/">Conditions générales </a>
        <a href="/">Cookies</a>
        </div>
    </div>
  </div>
);

export default Footer;
