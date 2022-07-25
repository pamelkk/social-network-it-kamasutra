let initialState = {
    games: [
        {id: 1, link: "/chess", name: "Chess", img: "https://cdn-icons-png.flaticon.com/512/178/178148.png"},
        {id: 2, link: "/snake", name: "Snake", img: "https://flash4play.com/games/submissions/thumbnails/igroutka_751201258.jpg"},
        {id: 3, link: "/rockpaperscissors", name: "Rock-paper-scissors", img: "https://st3.depositphotos.com/5045705/16974/v/600/depositphotos_169745242-stock-illustration-rock-paper-scissors-icons.jpg"}]
}

const gamesMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default gamesMenuReducer;