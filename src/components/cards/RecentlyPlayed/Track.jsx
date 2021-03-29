import React, { useEffect } from 'react'
import Sidebar from '../../Index/sidebar/Sidebar'
// import Body from '.././components/Index/body/Body'
import Footer from '../../Index/footer/Footer'
import '../../Index/Player.css'
import Track from './TrackList'
import Header from '../../Index/body/Header'
import '../../Index/body/Body.css'

const Player = ({ spotify }) => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    );
}

const Body = ({spotify}) => {

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__content">
                {/* <Cards /> */}
                <Track />
            </div>
        </div>
    );
};



export default Player;
