export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    album01: null,
    album02: null,
    album03: null,
    album04: null,
    album01_track: null,
    album02_track: null,
    album03_track: null,
    album04_track: null,
    // temporary token, remove it after development
    // token: "BQAQBfgT_VdSHhWGOoNJAfd5vKzT8LjPCBEi2WsyA6HGXF3xjcpnzvJ-2bK4ZvGhu0ghZAYjsoZ6jLkbiSiQI9YqsRJl29_DKmzRwpprGvYMLjL6PW1vqiFpv-_DIo127pFFwnA5rJtvmH14T9tYrrIzCSNC7YDYIcLYlZTkBWCnXRtd5amE"
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
        default: 
            return state           
    }
}

export default reducer