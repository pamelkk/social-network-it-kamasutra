const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    messages: [
        {id: 1, message: "sdhfnlfm;lsd;b 'mskn.......oops ;P"},
        {id: 2, message: "Meeeeow..How are you?"},
        {id: 3, message: "Woof!"}],
    newMessageText: "Hello, dear ;)",
    dialogs: [
        {id: 1, name: "Boston", src: "https://i.pinimg.com/236x/ed/0e/6e/ed0e6e3750115d9b9009deb0650b0086--cat-s-kitty-cats.jpg?nii=t"},
        {id: 2, name: "Isida", src: "https://demotivation.ru/wp-content/uploads/2020/06/5761253fb86d15e708bb1902901c4c04-345x345.jpg"},
        {id: 3, name: "Emil", src: "http://rasfokus.ru/images/photos/small/b2f8e9d9ed495fe079a2d3e020444a5c.jpg"},
        {id: 4, name: "Silver", src: "https://otravlenye.ru/wp-content/uploads/koshka.jpg"},
        {id: 5, name: "Bonya", src: "https://97.img.avito.st/image/1/lKp0LraxOENCmbpOUDjwu4qNOEfIjzJB"},
        {id: 6, name: "Florenziya", src: "https://zastavok.net/ts/animals/1507479504.jpg"},
        {id: 7, name: "Kuper", src: "https://ria-m.tv/images/news/2019/03/146648.jpg?1629450510"}]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
        default:
            return state;
    }
}

export const sendMessageAction = () => ({type: SEND_MESSAGE})  
export const updateNewMessageTextAction = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;