export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    // temporary token, remove it after development
    token: "BQA_N3O9p3Gtshe59Im7rev4pamzXrKUWcvlHxcBnLoczSMdQWUpP3krSNHRC6Nq-AobKtuimxPAcK4KtqXaLZqp9DnTxmNI_UPSejBgqjcKgrtiApoSHL6b_taodETcFAfVrrta2c-oLUFPumK3TZNztpHnV1EtCLbB-Rt3BDZdiunLlsdd"
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