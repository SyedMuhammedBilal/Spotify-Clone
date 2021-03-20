import React from 'react'
import Logo from '../../images/Vector.png'
import styled from 'styled-components'
import { accessUrl } from '../../API/SpotifyAuth'
import './Login.css'

const LoginButton = styled.button`
    width: 25vw;
    height: 7.5vh;
    background-color: #1DB954;
    border: none;
    outline-width: 0;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    border-radius: 60px;
    /* transition: .5s; */

    @media(min-width: 200px) and (max-width: 500px) {
        width: 45vw;
        height: 5.5vh;
    }

    @media(min-width: 700px) and (max-width: 1100px) {
        width: 35vw;
        height: 6vh;
        font-size: 25px;
    }

    @media(min-width: 1300px) {
        font-size: 18px;
        height: 5.5vh;
    }

    &:hover {
        background-color: #23e065;   
        transition: .6s; 
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`

function Login() {
    return (
        <div className="login__container">
            {/* Spotify logo */}
            <div className="login__logo">
                <img src={Logo} alt="logo" />
            </div>
            {/* login button */}
            <div className="login__button">
                <a href={accessUrl}> <LoginButton> Login with Spotify </LoginButton> </a> 
            </div>
            <div className="login__terms">
                <p>By clicking on Log in, you agree to Spotify's <a href="https://www.spotify.com/us/legal/end-user-agreement/">Terms and Condition of Use.</a></p>
            </div>
            <div className="login__terms-2">
                <p>To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's <a href="https://www.spotify.com/us/legal/privacy-policy/">Privacy Policy.</a></p>
            </div>
        </div>
    )
};

export default Login
