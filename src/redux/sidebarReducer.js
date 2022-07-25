let initialState = {
    pages: [
        {id: 1, link: "/profile", name: "Profile"},
        {id: 2, link: "/dialogs", name: "Messages"},
        {id: 3, link: "/news", name: "News"},
        {id: 4, link: "/music", name: "Music"},
        {id: 5, link: "/settings", name: "Settings"},
        {id: 6, link: "/applications", name: "Applications"},
        {id: 7, link: "/games", name: "Games"},
        {id: 8, link: "/friends", name: "Friends"}]
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;