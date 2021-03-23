export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    album01: null ,
    album02: null ,
    album03: null ,
    album04: null ,
    // temporary token, remove it after development
    // token: "BQDsBA3ysa1mnjVlBK-i7EH9sAGwYyRNzLM9bKGXxzH3o8Z-tu-epZc6zUGEXhdKtgGP3EEmBpA9r7Jxt8g3cz1x5-ASzwzdtGrP0Zfp-V5YAiJKQHkHxYeytXfgxo5zfhcGAgskLTSsueCjjv-QIZypw9h0gfIb5JQsJ2BKKBfwLwDX4k9Q"
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
        default: 
            return state           
    }
}

export default reducer