import React from 'react'
import './Sidebar.css'
import SidebarOptions from './options/SidebarOptions'
// import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
// import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { Link } from 'react-router-dom'
import { useDataLayerValue } from '../../../store/index'
import { ReactComponent as HomeIcon } from '../../../svgs/home.svg'
import { ReactComponent as SearchIcon } from '../../../svgs/search.svg'
import { ReactComponent as LibraryIcon } from '../../../svgs/library.svg'

const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
            <Link style={{textDecoration: 'none'}} to="/">
                <SidebarOptions Icon={HomeIcon} title="Home" />
            </Link>
            <Link style={{textDecoration: 'none'}} to="/search">
                <SidebarOptions Icon={SearchIcon} title="Search" />
            </Link>
            <SidebarOptions Icon={LibraryIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title"> PLAYLISTS </strong>
            <hr />

            {playlists?.items?.map(playlist => <SidebarOptions title={playlist.name} /> )}
        </div>
    )
}

export default Sidebar;
