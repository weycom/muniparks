import React from 'react'
import { Link } from 'gatsby'
import MLogo from '../components/Logo'


const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }
    render() {
        return (
            <section>
                <input id="main-menu-checkbox" type="checkbox"></input>
                <header>
                    <label for="main-menu-checkbox" className="menu-toggle">
                        <span className="sr-only">Open main menu</span>
                        <span className="fa fa-bars" aria-hidden="true"></span>
                    </label>
                    <Link to="/" className="logo hide-desktop" title="Logo">
                        <MLogo />
                    </Link>
                    <nav id="main-menu" role="navigation" className="main-menu" aria-expanded="false" aria-label="Main menu" 
                        >
                        <Link to="/" className="logo" title="Logo">
                            <MLogo />
                        </Link>
                        <label for="main-menu-checkbox"className="menu-close">
                          <span className="sr-only">Close main menu</span>
                          <span className="fa fa-close" aria-hidden="true"></span>
                        </label>
                        <ul>
                            <li>
                                <a className="navbar-item" href="https://community.muniparks.com">
                                    Community
                                </a>
                            </li>
                            <li>
                                <Link className="navbar-item" to="/research-briefs">
                                    Research Briefs
                                </Link>
                            </li>
                            <li>
                                <Link className="navbar-item" to="/pro-voices">
                                    Pro Voices
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <label for="main-menu-checkbox" className="backdrop" tabindex="-1" aria-hidden="true" hidden></label>
                </header>
            </section>
        )
    }
}

export default Navbar
