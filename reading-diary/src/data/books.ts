import type { Book } from "../types/book";

export const books: Book[] = [
    {
        id:1,
        title:"1984",
        author: "Джордж Оруэлл",
        pages: 320,
        status: "done",
        rating: 5,
        note: "Хорошая книга, рекомендую"
    },
    {
        id: 2,
        title: "Отцы и дети",
        author: "Иван Тургенев",
        pages: 335,
        status: "reading",
        rating: 2,
        note: "Не понравилась"
    },
    {
        id: 3,
        title: "Тучи",
        author: ".",
        pages: 5,
        status: "want",
        rating: 4,
        note: "Прикольно"
    }
];