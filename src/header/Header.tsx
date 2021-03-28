import "./header.scss";

import {Button} from '@material-ui/core'

const header = ["Accueil", "Menu", "Contact"];

const logo = "LOGO";

const Header = () => (
  <div className="header_main_zone">
    <div className="header_first_zone">
      <div className="header_logo_zone">{logo}</div>
    </div>
    <div className="header_second_zone">
      <div className="header_menu_zone">
        <ul>
          {header.map((menuTitle, index) => (
            <li key={index}>
              <Button
              className="button_text_color">
                {menuTitle}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="header_login_zone">
        <Button
        className="button_text_color">
          LOGIN
        </Button>
      </div>
      <div className="header_flag_zone">
        <Button
        className="button_text_color">
          FR
        </Button>
      </div>
    </div>
  </div>
);

/* idée : pour le flag, faire un seul bouton avec img drapeau -> popup liste des autres langues */

export default Header;
