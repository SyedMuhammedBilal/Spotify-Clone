import React from 'react'
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
// import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { Grid, Slider } from "@material-ui/core";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">

            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleFilledWhiteIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">

            </div>
        </div>
    )
}

export default Footer
