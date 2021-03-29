import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'
import Cards from '../../cards/Cards'
import Cards2 from '../../cards/TopArtists/Cards'
import Cards3 from '../../cards/NewReleases/Cards'
import Cards1 from '../../cards/RecentlyPlayed/Cards'
import Tracks from '../../cards/tracks/Tracks'
import './Body.css'

const Body = ({ spotify }) => {
    const today = new Date();
    const currentHour = today.getHours();

    const [date, setDate] = useState();

    useEffect(() => {
        if(currentHour < 12) {
            setDate('Good morning')
        } else if (currentHour < 18) {
            setDate('Good afternoon')
        } else {
            setDate('Good evening')
        }
    }, []);

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__content">
                <div className="body__date">
                    <h1>{date}</h1>
                </div>  
                <Cards1 spotify={spotify} />
                <div className="body__date">
                    <h1> Top albums </h1>
                </div>  
                <Cards />
                <div className="body__date">
                    <h1> Your favorite artists </h1>
                </div> 
                <Cards2 spotify={spotify} />
                <div className="body__date1">
                    <div>
                        <h1> New releases for you </h1>
                        <p> Brand new music from artists you love.</p>
                    </div>
                    <div>
                        <p> <Link style={{textDecoration: 'none', color: 'rgb(160, 159, 159)'}} to="/new_releases">See More</Link></p>
                    </div>
                </div> 
                <Cards3 spotify={spotify} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* <Tracks /> */}
            </div>
        </div>
    )
};

export default Body
