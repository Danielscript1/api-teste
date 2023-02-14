import styled from "styled-components";

export const ReasonList = styled.ul`
margin-bottom: 12px;
list-style: none;

`;

export const ReasonItem = styled.li`
background-color: #00190A;
color: #fff;
padding: 10px;
border-radius: 11px;
font-size: 2rem;
`;

export const Icone = styled.button`
cursor: pointer;
margin: 2px 8px 0px 0px;
height: ${props=>  `px`};
width: ${props=> `px`};
background-color:${props => props.color};
a{
color:#000
}
`;