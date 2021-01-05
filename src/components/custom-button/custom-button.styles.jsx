import styled, { css } from "styled-components";

const decideStyles = (props) => {
  if (props.isGoogle) return googleButton;

  return props.inverted ? invertedButton : regularButton;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${decideStyles}
`;

const googleButton = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const regularButton = css`
 background-color: #01bf71;
 color: #010606;
 

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
 `;

const invertedButton = css`
 background-color: white;
        color: black;
        border: 1px solid black;
   
       &:hover{
           background-color:black;
           color:white;
           border: none;
 `;
