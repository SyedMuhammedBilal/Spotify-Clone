import React from 'react'
import Logo from '../../images/Vector.png'
import './Login.css'

function Login() {
    return (
        <div>
            <div className="login__logo">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    )
}

export default Login
