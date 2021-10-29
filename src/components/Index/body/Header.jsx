/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Header.css'
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useDataLayerValue } from '../../../store/index'
import { withStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useHistory, Redirect, withRouter } from "react-router-dom";

const StyledAvatar = withStyles({
    root: {
        height: '25px',
        width: '25px',
        opacity: 5,
    }
})(Avatar);

const Header = () => {
    const [{ user }, dispatch] = useDataLayerValue();
    const [dropdown, setDropdown] = useState(false);
    const [navbar, setNavbar] = useState(false)
    console.log('uuusss------->', user);

    let history = useHistory();

    const showDropdown = () => {
        return (
            setDropdown(!dropdown)
        )
    };

    const goBack = () => {
        window.history.back();
    }

    const loginPage = () => {
        Redirect("/");
    }

    const changeNavColor = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavColor)

    return (
        <div className={navbar ? 'header active' : 'header'}>
            <div className="header__left">
                <div className="header__arrow">
                    <div className="arrow__section">
                        <ArrowBackIosIcon style={{cursor: 'pointer'}} onClick={goBack} />
                    </div>
                </div>
                <div className="header__arrow">
                    <div className="arrow__section">
                        <ArrowForwardIosIcon style={{cursor: 'pointer'}} />
                    </div>
                </div>
            </div>
            <div className="header__right">
                <div onClick={showDropdown} className="header__profileSection">
                    <StyledAvatar src={user?.images[0]?.url} alt="profile" />
                    <h4> {user?.display_name} </h4>
                    {/* <h4> Syed Muhammed Bilal </h4> */}
                    {dropdown === false ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                </div>
                {dropdown && <div className="header__dropdown">
                    <h4>Account</h4>
                    <hr />
                    <h4 onClick={loginPage}>Log out</h4>
                </div>}
            </div>
        </div>
    )
}

export default Header
