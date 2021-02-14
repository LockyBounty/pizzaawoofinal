import {BrowserRouter as Router, Link,Switch, 
    Redirect} from "react-router-dom"


const Navbar = () => (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/test">test</Link>
                </li>
            </ul>
        </nav>

)

export default Navbar;