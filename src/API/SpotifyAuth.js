export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "8c097e2a273c40588a3455ae4b2ae5e6";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

// just splitting the accessToken and decoding it with unique token every time users logged in 
export const getTokenFromURL = () => {
    return window.location.hash.substring(1).split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial; 
        }, {});
};

// scopes.join for adding ASCII space between (Scopes)
export const accessUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

