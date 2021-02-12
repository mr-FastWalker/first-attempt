import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DialogsData = [
    {id: 1, name: 'Serg'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Lex'},
    {id: 4, name: 'Olya'},
    {id: 5, name: 'Miha'}
];

let messagesData = [
    {id: 1, text: 'Привет!'},
    {id: 2, text: 'Как дела?'},
    {id: 3, text: 'Тренируемся печатать буквы'},
    {id: 4, text: 'расскажи анекдот'},
    {id: 5, text: 'новое сообщение'}
];

let TextPostData = [
    {id:1, textPost:'Привет! Это первый пост', Likes:44},
    {id:2, textPost:'А это второй пост', Likes:56},
    {id:3, textPost:'Третий пост до кучи', Likes:8},
];

ReactDOM.render(
  <React.StrictMode>
    <App DialogsData={DialogsData} messagesData={messagesData} TextPostData={TextPostData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

