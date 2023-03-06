import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+ input)
  };

  return (
    <FormStyle onSubmit={submitHandler}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder={'searching...'}
        />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 3rem;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
`;

export default SearchBar;
