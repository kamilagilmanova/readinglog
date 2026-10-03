import { books } from "./data/books";
import BookList from "./components/BookList/BookList";
import "./App.css";
import styled from "@emotion/styled";
// import StyledButtonDemo from "./practice/StyledButtonDemo";

const Page = styled.div`
  min-height: 100vh;
  padding: 20px 48px;
  background: linear-gradient(#fbfaf7, #f6f1ea); 
  color: #24211d;
`;
const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

function App() {
  return (
    <Page>
      <Container>
      <BookList books={books} />
      {/* <StyledButtonDemo/> */}
      </Container>
    </Page>
  );
}

export default App;
