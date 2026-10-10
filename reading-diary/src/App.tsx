import { books } from "./data/books";
import BookList from "./components/BookList/BookList";
import "./App.css";
import styled from "@emotion/styled";
import Stats from "./components/Stats/Stats";
import TicketStatsDemo from "./practice/TicketStatsDemo";
import { ProductsStatsDemo } from "./practice/WarehouseStatsDemo";
// import ButtonDemo from "./practice/StyledButtonDemo";

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
        <Stats books={books} />
        <BookList books={books} />
        <TicketStatsDemo></TicketStatsDemo>
        <ProductsStatsDemo/>
        {/* <ButtonDemo/> */}
      </Container>
    </Page>
  );
}

export default App;
