import React, { useState, useEffect } from 'react'
import './Body.css'

const Body = () => {
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
            <div className="body__date">
                <h1>{date}</h1>
            </div>
        </div>
    )
}

export default Body
