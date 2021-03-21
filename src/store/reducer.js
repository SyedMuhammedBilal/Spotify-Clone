export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    // temporary token, remove it after development
    token: "BQDRXoy6jf_Tvz8Tehi17a1fV2-3fgEEDvonspkPdUDDI0Vnt2HuqdSSwdzC91q3RsgOdg92KRTpbMUfUzcDD0DtpbDitUzmXYwkZUxaUEn2rt3VV12KKuEgqpUorm-1YRj_bhAIldJvliPb4O_rdEJ7kDsR7C3cJ-EmmR7rbaznkOLq-Hh9"
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