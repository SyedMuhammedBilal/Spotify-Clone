import React from 'react'
import Sidebar from '.././components/Index/sidebar/Sidebar'
// import Body from '.././components/Index/body/Body'
import Footer from '.././components/Index/footer/Footer'
import '.././components/Index/Player.css'
import LibraryComponent from '.././components/Library/LibraryComponent'
import Header from '../components/Index/body/Header'
import '../components/Index/body/Body.css'

const Player = ({ spotify }) => {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    )
}


const Body = ({spotify}) => {

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__content">
                <LibraryComponent spotify={spotify} />
            </div>
        </div>
    )
};

export default Player
