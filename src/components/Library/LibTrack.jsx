/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Avatar } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { useDataLayerValue } from '../../store/index'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { ReactComponent as PlayIcon } from '../../svgs/PlayIcon.svg'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useParams } from 'react-router-dom';
import moment from 'moment'

import './LibTrack.scss'

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
    const [{ tracks }] = useDataLayerValue();
    
    const [loading, setLoading] = useState(true);
    const [minSec, setMinSec] = useState(null);
    let { id } = useParams()
    
    console.log('TTREAACKK-----', tracks);
    
    const data = [tracks]

    if(!data)
    return (<h2> Not found </h2>);

    return (
        <React.Fragment>
            {data?.map((dat, index) => {
            const date = dat?.release_date?.substring(0, 4)
            const albumName = dat?.name

                return (
                    <div key={index}>
                        <div className="body__info-L">
                            <img loading="lazy" src={dat?.images[0].url} alt="trackImage" />
                            <div className="body__infoText-L">
                                <strong>{dat?.type}</strong>
                                <h2>{dat?.name}</h2>
                                <div className="body__bio-L">
                                    <StyledAvatar src={dat?.images[0]?.url} />  
                                    <p>{dat?.owner?.display_name}</p>
                                    {/* <h4>.</h4>
                                    <span> {date} </span> */}
                                    <h4>.</h4>
                                    <span>{dat?.tracks.total} songs, 45 min 31 sec</span>
                                </div>
                            </div>
                        </div>
                            <div className="body__icons-L">
                                <span className="body__shuffle-L">
                                    <PlayIcon />
                                </span>
                                <BorderHeart fontSize="large" className="body__heart-L" />
                                <MoreHorizIcon style={{cursor: 'pointer'}} />
                            </div>
                        <div className="body__songs-L">
                            <div className="songRow__title-L">
                                <h5 style={{fontSize: '14px'}}>#</h5>
                                <div className="songRow__info-L">
                                    <p style={{fontSize: '14px'}}>TITLE</p>
                                </div>
                                <div className="songRow__album-L">
                                    <p style={{fontSize: '14px'}}>ALBUM</p>
                                </div>
                                <div className="songRow__day-L">
                                    <p style={{fontSize: '14px'}}>DATE ADDED</p>
                                </div>
                                <div className="minSec-L">
                                    <AccessTimeIcon />
                                </div>
                            </div>
                                    <hr />
                            {dat?.tracks?.items.map((item, index) => {
                                    var minutes = Math.floor(item?.track?.duration_ms / 60000);
                                    var seconds = ((item?.track?.duration_ms % 60000) / 1000).toFixed(0);
                                    const result = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

                                const date = moment(item?.added_at).startOf('day').fromNow();        // 21 hours ago
                                

                                return (
                                    <div className="songRow-L">
                                        <h5> {item?.track?.track_number} </h5>
                                        <div className="songRow__info-L">
                                            <div className="tracks__names">
                                                <h1> {item?.track?.name} </h1>
                                                <p> {item?.track?.artists?.map((artist) => artist?.name).join(", ")} </p>
                                            </div>
                                        </div>
                                        <div className="minSec-L">
                                            <h5> { albumName } </h5>
                                        </div>
                                        <div className="minSec-L">
                                            <h5> {date} </h5>
                                        </div>
                                        <div className="minSec-L">
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
