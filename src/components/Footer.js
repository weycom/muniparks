import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
    render() {
        return (
        <div id="footer">
        <footer className="footer">
            <div className="footer-contents">
                <ul>
                    <li>
                        <Link to="/" className="navbar-item">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-item" to="/about">
                        About
                        </Link>
                    </li>
                    {/* <li>
                        <a
                            className="navbar-item"
                            href="/admin/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                        Admin
                        </a>
                    </li>*/}
                </ul>
                {/*<ul>
                    <li>
                        <a title="facebook" href="https://facebook.com">
                          <img
                            src={facebook}
                            alt="Facebook"
                            style={{ width: '1em', height: '1em' }}
                          />
                        </a>
                    </li>
                    <li>
                    <a title="twitter" href="https://twitter.com/muniparks">
                      <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    </li>
                    <li>
                    <a title="instagram" href="https://instagram.com">
                      <img
                        src={instagram}
                        alt="Instagram"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    </li>
                    <li>
                    <a title="vimeo" href="https://vimeo.com">
                      <img
                        src={vimeo}
                        alt="Vimeo"
                        style={{ width: '1em', height: '1em' }}
                      />
                    </a>
                    </li>
                </ul>*/}
            </div>
        </footer>
        </div>
        )
    }
}

export default Footer
