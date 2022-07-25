const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "Hi", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20}],
    newPostText: "шкф "
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
        default:
            return state;
    }
}

export const addPostAction = () => ({type: ADD_POST})
export const updateNewPostTextAction = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;