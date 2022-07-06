import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} src={dialog.src} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
  }

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>Your Dialogs</h1>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsElements}</div>
        <div className={classes.messagesWindow}>
          <div className={classes.messages}>{messagesElements}</div>
          <div className={classes.newMessage}>
            <textarea ref={newMessageElement} placeholder="Write message..."></textarea>
            <button onClick={addMessage} className={classes.buttonAdd}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
