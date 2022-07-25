import React from "react";
import { addPostAction, updateNewPostTextAction } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostAction());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextAction(text));
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    );
};

export default MyPostsContainer;
