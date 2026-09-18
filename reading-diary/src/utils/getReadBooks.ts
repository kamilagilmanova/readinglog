import type { Book } from "../types/book"


export function getReadBooks(books: Book[]): Book[] {
return books.filter((book) => book.isRead)
}