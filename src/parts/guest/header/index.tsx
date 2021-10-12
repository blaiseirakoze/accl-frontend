import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Logo from '../../../components/logo'
import './style.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    const logoStyle = {
        color: "white",
        size: "30px",
        fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
      }
    return (
        <AppBar position="relative" className="header-container">
            <div className="row">
                <Logo style={logoStyle} homePath={"/"}/>
                <ul className="col">
                    <li> <Link className="atag" to="/signin" >Sign In</Link> </li>
                    <li> <Link className="atag" to="/signup/type">Sign Up</Link> </li>
                </ul>
            </div>
        </AppBar>
    )
}

export default Header
