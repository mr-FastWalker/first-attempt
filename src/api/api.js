import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "86c8eb20-557c-49dd-8ad3-357ad2bea17a"},
});

//вспомогательная функция для запросов к API на сервер, выносим из кода в DAL (data access layer)

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance //instance используем вместо axios, он автоматически добавляет настройки к запросам
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data //возвращаем не полный response, а только data (тема ""промисы"")
        });
}

