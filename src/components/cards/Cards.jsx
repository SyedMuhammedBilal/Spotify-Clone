import React from 'react'
import './Cards.scss'

const Cards = () => {
    return (
        <>
        <div className="cardsWrap">
            <div className="card">
                <div className="cardImage">
                    <img src="https://pyxis.nymag.com/v1/imgs/ff4/bf1/0676dc29d8cbfb939ea079638371ffc44d-justice.rsquare.w1200.jpg" alt="album" />
                </div>
                <div className="cardContent">
                    <h3>Justice</h3>
                    <p>Justin Bieber</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards
