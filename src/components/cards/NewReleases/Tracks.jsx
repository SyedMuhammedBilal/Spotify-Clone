/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Avatar } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { useDataLayerValue } from '../../../store/index'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { ReactComponent as PlayIcon } from '../../../svgs/PlayIcon.svg'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useParams } from 'react-router-dom';

import './Tracks.scss'

const StyledAvatar = withStyles({
    root: {
        height: '23px',
        width: '23px',
        marginRight: '5px'
    }
})(Avatar);

const BorderHeart = withStyles({
    root: {
        fontSize: '2.5rem',
        cursor: 'pointer'
    }
})(FavoriteBorderIcon)

const Tracks = ({ spotify, album }) => {

    const [{ released_album }] = useDataLayerValue();
    
    let { id } = useParams()
    
    console.log('chec---TTREAACKK-----', released_album);

    const data = [released_album]

    if(!data)
    return (<h2> Not found </h2>);

    return (
        <React.Fragment>
            {data?.map((dat, index) => {
            const date = dat?.release_date?.substring(0, 4)
                return (
                    <div key={index}>
                        <div className="body__info">
                            <img loading="lazy" src={dat?.images[0].url} alt="trackImage" />
                            <div className="body__infoText">
                                <strong>{dat?.album_type}</strong>
                                <h2>{dat?.name}</h2>
                                <div className="body__bio">
                                    <StyledAvatar src={dat?.images[2]?.url} />
                                    <p>{dat?.artists[0]?.name}</p>
                                    <h4>.</h4>
                                    <span> {date} </span>
                                    <h4>.</h4>
                                    <span>{dat?.total_tracks} songs, 45 min 31 sec</span>
                                </div>
                            </div>
                        </div>
                            <div className="body__icons">
                                <span className="body__shuffle">
                                    <PlayIcon />
                                </span>
                                <BorderHeart fontSize="large" className="body__heart" />
                                <MoreHorizIcon style={{cursor: 'pointer'}} />
                            </div>
                        <div className="body__songs">
                            <div className="songRow__title">
                                <h5 style={{fontSize: '14px'}}>#</h5>
                                <div className="songRow__info">
                                    <p style={{fontSize: '14px'}}>TITLE</p>
                                </div>
                                <div className="minSec">
                                    <AccessTimeIcon />
                                </div>
                            </div>
                                    <hr />
                            {dat?.tracks?.items.map((item, index) => {
                                    var minutes = Math.floor(item?.duration_ms / 60000);
                                    var seconds = ((item?.duration_ms % 60000) / 1000).toFixed(0);
                                    const result = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
                                return (
                                    <div className="songRow">
                                        <h5> {item?.track_number} </h5>
                                        <div className="songRow__info">
                                            <h1> {item?.name} </h1>
                                            <p> {item?.artists?.map((artist) => artist?.name).join(", ")} </p>
                                        </div>
                                        <div className="minSec">
                                            <h5> {result} </h5>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default Tracks
