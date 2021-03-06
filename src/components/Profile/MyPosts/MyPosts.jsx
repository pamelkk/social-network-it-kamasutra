import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
      props.addPost();
  }

  let onPostChange = (e) => {
      let text = e.target.value;
      props.updateNewPostText(text);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={ newPostElement } value={props.newPostText} />
        </div>
        <div>
          <button onClick={ onAddPost } className={classes.buttonAdd}>Add Post</button>
        </div>
      </div>
      <ul className={classes.posts}>
        {postsElements}
      </ul>
    </div>
  );
};

export default MyPosts;
