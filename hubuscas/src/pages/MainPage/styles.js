import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d5e1df;
  width: 25%;
  border-radius: 10px;
  margin-top: 6vh;
  padding: 0.5em;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em 1.5em;
  color: black;
  background: #F5F5F5;
  border: none;
  border-radius: 3px;
  width: 45%;
  height: 2rem;
`;

export const Button = styled.button`
  font-family: 'Lato', sans-serif;
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  background: #F5F5F5;
  border: none;
  border-radius: 3px;
  height: 2.5rem;

`;

export const Img = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 8px solid #FFF;
  margin: 1em;
`

export const Text= styled.h1`
  font-family: 'Lato', sans-serif;
  width: 100%;
  text-align: center;
  font-size 22px;
  color: #696969;

`