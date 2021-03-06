import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  justify-content: center;
  background-color: #6c7775; 
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d5e1df;
  width: 35%;
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
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  border: 8px solid #FFF;
  margin: 1em;
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Text= styled.h1`
  font-family: 'Lato', sans-serif;
  width: 100%;
  text-align: center;
  font-size 22px;
  color: #696969;
`
export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80rem;
    border: 2px solid #808080;
    height: 15rem;

`
export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid #808080;
    height:400px;
    overflow: scroll;

`