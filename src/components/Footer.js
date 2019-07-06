import React from 'react'
import { Link } from 'gatsby'

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
                </ul>
            </div>
        </footer>
        </div>
        )
    }
}

export default Footer
