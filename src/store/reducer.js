export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    // temporary token, remove it after development
    token: 'BQD1lmN1pMfR-0Q11-yyxMRrfFA-qRrWYYoftFV6I8176vBEzbefR83Ua4ORp2F4TPb1P3yegUbKtcLIZd7LXX-PF6HAD_XyC5-up16hHO0soHDWEhU8FzB6p9ZSXFSv3md3EE-PN6mHrT5zHdM5J7naV8rco8Wsu3qXfByoe4siDbz4g7eK',
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
        default: 
            return state           
    }
}

export default reducer