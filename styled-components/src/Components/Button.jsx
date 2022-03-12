import styled from "styled-components"


const Button = styled.button`
background-color: ${({show})=>(show==="Light theme" ? "#E6D5B8":"#1B1A17")};
    color: ${({show})=>(show==="Light theme" ? "#1B1A17":"#E6D5B8")};
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    &:hover{
    box-shadow: -3px 6px 5px 1px rgba(0, 0, 255, .2);
    }
`


export {Button}