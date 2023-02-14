import styled from "styled-components";
import { colorTeciario } from "styles/variables";

export const FormRegister = styled.form`
    display: grid;
    grid-column: 2;
    font-size: 4rem;
    background-color: rgba(0,212,80);
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;
    max-height: 292px;
`;

export const Input = styled.input`
    color: #fff;
    height: 5rem;
    width: 100%;
    padding: 8px 12px 4px;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    background-color: ${colorTeciario};
    box-shadow: 0px 2px 4px #2D2B2B9F inset;
    &::placeholder {
                color: #BFBFBF;
            }

`;