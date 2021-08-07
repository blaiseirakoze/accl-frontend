import React from 'react'
import { Link } from 'react-router-dom';
import "./style.scss";

type Props = {
    style?: any;
}
const Logo = (props:Props) => {
    const {color, size} = props.style;
    return (
        <h2 className="logo" > <Link to="/" style={{color: color, fontSize: size }}> ACCL </Link> </h2>
    )
}

export default Logo
