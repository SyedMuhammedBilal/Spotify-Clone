export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    top_artists: null,
    new_releases: null,
    released_album: null,
    followed_artists: null,
    spotify: null,
    artist: null,
    // album: null,
    album01: null,
    album02: null,
    album03: null,
    album04: null,
    album01_track: null,
    album02_track: null,
    album03_track: null,
    album04_track: null,
    // temporary token, remove it after development
    // token: "BQBW2bWQR6pQ-IWwbMLmFHARBSlGNMenGJIS9KDBiG1YZmxeGCogO9usLOWXbkF_0HsmQLMKiwQ5pjOXqAOes9b7KywlakDdnDZJsRR9dk5QyP4ZoQoF_4fmj28IZ-axhwZ_JCQu-JF6PIsrYrhnK6nChKP1rBufWdmOf-jjuqX5CSp-Gr_1"
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLIST":
            return {
                ...state,
                playlists: action.playlists
            }
        case "SET_ALBUM_ONE":
            return {
                ...state,
                album01: action.album01
            }
        case "SET_ALBUM_TWO":
            return {
                ...state,
                album02: action.album02
            }
        case "SET_ALBUM_THREE":
            return {
                ...state,
                album03: action.album03
            }
        case "SET_ALBUM_FOUR":
            return {
                ...state,
                album04: action.album04
            }
        case "SET_ALBUM_TRACK_01":
            return {
                ...state,
                album01_track: action.album01_track
            }
        case "SET_ALBUM_TRACK_02":
            return {
                ...state,
                album02_track: action.album02_track
            }
        case "SET_ALBUM_TRACK_03":
            return {
                ...state,
                album03_track: action.album03_track
            }
        case "SET_ALBUM_TRACK_04":
            return {
                ...state,
                album04_track: action.album04_track
            }
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            }
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,

            }
        case "SET_TOP_ARTISTS": 
            return {
                ...state,
                top_artists: action.top_artists
            } 
        case "SET_NEW_RELEASES":
            return {
                ...state,
                new_releases: action.new_releases
            }
        case "SET_RELEASED_ALBUM":
            return {
                ...state,
                released_album: action.released_album
            }
        case "SET_FOLLOWED_ARTISTS":
            return {
                ...state,
                followed_artists: action.followed_artists
            }
        case "SET_ARTIST":
            return {
                ...state,
                artist: action.artist
            }
        case "SET_ALBUMS":
            return {
                ...state,
                album: action.album
            }
        default: 
            return state           
    }
}

export default reducer