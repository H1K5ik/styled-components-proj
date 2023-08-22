import styled, {css} from "styled-components";
import {MyAimation} from "../styles/animations/Animations";
type StyledBtnPropsType = {
    color?: string;
    fontSize?: string;
    btnType?: "primary" | "outlined";
    active?: boolean;
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  padding: 10px 20px;
  font-size: ${props=> props.fontSize || "2rem"};
  font-weight: bold;
  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props =>props.color || "#e30808"};
    color: ${props =>props.color || "#e30808"};
    background-color: transparent;
    &:hover{
      border-color: #8e2e9f;
      color: #8e2e9f;
      background-color: transparent;
    }
  `}
 
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props =>props.color || "#e30808"};
    color: snow;
    &:hover {
      background-color: #8e2e9f ;
    }
  `}
  ${props => props.active  && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px #553459;
  `}
  
`