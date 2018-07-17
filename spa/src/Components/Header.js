import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    <Link to="/">P.A.M </Link>
                </h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/monsters">Monster Database</Link>
                        </li>
                        <li>
                            <Link to="/spells">Spell Database</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Header;
