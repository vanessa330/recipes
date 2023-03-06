import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>recipesssss</Logo>
        </Nav>

        <SearchBar />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
