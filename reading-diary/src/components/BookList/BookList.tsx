import { type Book } from "../../types/book";
import BookCard from "../BookCard/BookCard";
// import "./BookList.css";
import styled from "@emotion/styled";

interface BookListProps {
  books: Book[];
}

const Section = styled.section`
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #e7dfd4;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(82, 68, 52, 0.1);
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 20px;
  font-size: 26px;
  font-weight: 600;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function BookList({ books }: BookListProps) {
  return (
    <Section>
      <Title>Мои книги</Title>
      {books.length === 0 ? (
        <p className="book-list__empty">Книг пока нет</p>
      ) : (
        <List>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </List>
      )}
    </Section>
  );
}
