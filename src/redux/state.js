import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            TextPostData: [
                {id: 1, textPost: 'Привет! Это первый пост', Likes: 44},
                {id: 2, textPost: 'А это второй пост', Likes: 56},
                {id: 3, textPost: 'Третий пост до кучи', Likes: 8},
            ],
            newPostText: 'введите текст сообщения'
        },
        DialogsPage: {
            messagesData: [
                {id: 1, text: 'Привет!'},
                {id: 2, text: 'Как дела?'},
                {id: 3, text: 'Тренируемся печатать буквы'},
                {id: 4, text: 'расскажи анекдот'},
                {id: 5, text: 'новое сообщение'}
            ],
            DialogsData: [
                {id: 1, name: 'Serg', avatar: 'https://cs8.pikabu.ru/post_img/2018/02/19/10/151906309217261182.jpg', friendFlag: true},
                {id: 2, name: 'Sveta', avatar: 'https://i.ucrazy.ru/files/i/2013.7.9/1373389219_kote-nyashka-rozha-kot-536692.jpeg', friendFlag: false},
                {id: 3, name: 'Lex', avatar: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-70.jpg', friendFlag: true},
                {id: 4, name: 'Olya', avatar: 'https://vraki.net/sites/default/files/inline/images/3_37.jpg', friendFlag: true},
                {id: 5, name: 'Miha', avatar: 'https://cs-msk-fd-4.ykt2.ru/media/upload/photo/2016/06/10/starik_portret_trubka_shlyapa_75755_2048x2048.jpeg', friendFlag: false}
            ],
            newMessageText: 'введите Ваше сообщение',
        },
        sideBar: { },
    },
    _callSubscriber() {
        console.log('State changed'); //это заглушка, ниже в subscribe переопределяется
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // таким образом callback получаем данные (функцию), чтобы не было циклического импорта
    },

    dispatch(action) {  //общий метод для управления стейтом, принимает объект action, имеет тип {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    },
}

export default store;

window.store = store; //чтобы можно было обратиться глобально к store

// нужно почитать про ПАТТЕРН обсервер
// почитать про bind()
// store - OOP