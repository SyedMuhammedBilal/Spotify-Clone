export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    // temporary token, remove it after development
    token: "BQCHJ-PlgKaEP0ZqyTeSZVBM4ehpXfQfVZcjOKZaJPCQEYaVNIl362uwtJSrBMlvKQgSvHBLrzBfNwJU7QGAJNVzRhRVCZWRSgdz2Ud3k29F7vRorVtYDl3lSbC2I9UatzoE8Su6IUVEMHw99ZEiTYzKbHeHgbpfTTOZEXaEeg6zRxt97SKC"
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
        default: 
            return state           
    }
}

export default reducer