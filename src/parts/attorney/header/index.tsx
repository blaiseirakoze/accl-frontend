import React from 'react'
import { AppBar } from '@material-ui/core'
import Logo from '../../../components/logo'
import './style.scss'
import { Link } from 'react-router-dom'
import { SignOut } from '../../../store/auth/actions'
import { useDispatch } from 'react-redux'

const Header = () => {
    const logoStyle = {
        color: "white",
        size: "30px",
        fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
      }
      const disptch = useDispatch();
      const onSignOut = () => {
        disptch(SignOut);
      }
    return (
        <AppBar position="relative" className="header-container">
            <div className="row">
                <Logo style={logoStyle} homePath={"/attorney/case/list"}/>
                <ul className="col">
                    <li className="atag" onClick={onSignOut} > <Link to="" >Sign out</Link> </li>
                </ul>
            </div>
        </AppBar>
    )
}

export default Header
