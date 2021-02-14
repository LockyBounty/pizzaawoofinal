import styled from 'styled-components'


export const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "#6200ea" : "white"};
color: ${props => props.primary ? "white" : "#6200ea"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
/* border: 2px solid palevioletred;*/
z-elevation :10px;
border-radius: 3px;
`;

// Input's attrs will be applied first, 
//and then this attrs obj
const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
  }))`
    border: 2px solid palevioletred;
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;
  
export const PasswordInput = styled(Input).attrs({
    type: "password",
  })`
    // similarly, border will override Input's border
    border: 2px solid gray;
    border-radius: 3px;
  `;
  