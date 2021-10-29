import React from 'react'
import './Sidebar.css'
import SidebarOptions from './options/SidebarOptions'
import { Link } from 'react-router-dom'
import { useDataLayerValue } from '../../../store/index'
import { ReactComponent as HomeIcon } from '../../../svgs/home.svg'
import { ReactComponent as SearchIcon } from '../../../svgs/search.svg'
import { ReactComponent as LibraryIcon } from '../../../svgs/library.svg'

const Sidebar = () => {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
            <Link style={{textDecoration: 'none'}} to="/">
                <SidebarOptions Icon={HomeIcon} title="Home" />
            </Link>
            <Link style={{textDecoration: 'none'}} to="/search">
                <SidebarOptions Icon={SearchIcon} title="Search" />
            </Link>
            <Link style={{textDecoration: 'none'}} to="/collection/playlist">
                <SidebarOptions Icon={LibraryIcon} title="Your Library" />
            </Link>
            <br />
            <strong className="sidebar__title"> PLAYLISTS </strong>
            <hr />

            {playlists?.items?.map(playlist => <Link style={{textDecoration: 'none', color: '#fff'}} to={`/playlist/${playlist?.id}`}><SidebarOptions title={playlist.name} /></Link>)}
        </div>
    )
}

export default Sidebar;
