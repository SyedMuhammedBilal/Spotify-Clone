import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'
import Cards from '../../cards/Cards'
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
                {/* <Cards /> */}
                <Tracks />
            </div>
        </div>
    )
};

export default Body
