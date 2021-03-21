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
import FavoriteIcon from '@material-ui/icons/Favorite';
import DevicesIcon from '@material-ui/icons/Devices';
import { Grid, Slider } from "@material-ui/core";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src="https://pyxis.nymag.com/v1/imgs/ff4/bf1/0676dc29d8cbfb939ea079638371ffc44d-justice.rsquare.w1200.jpg" className="footer__albumLogo" alt="cover" />
                <div className="footer__songInfo">
                    <h4>Hold On</h4>
                    <p>Justin Bieber</p>
                </div>
                <FavoriteIcon className="footer_likeButton" style={{fontSize: '18px'}} />
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green footer__sideIcon" />
                <SkipPreviousIcon className="footer__icon footer__sideIcon" />
                <PlayCircleFilledWhiteIcon fontSize="large" style={{color: '#fff'}} className="footer__icon footer__playButton" />
                <SkipNextIcon className="footer__icon footer__sideIcon" />
                <RepeatIcon className="footer__green footer__sideIcon" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <DevicesIcon />
                    </Grid>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider style={{color: 'rgb(160, 159, 159)', padding: 'inherit', width: '13vw'}} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
