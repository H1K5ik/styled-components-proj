import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
            <Box>
                {/*<StyledBtn color="green" fontSize={"100px"}>1233123</StyledBtn>*/}
                {/*<StyledBtn color="blue" fontSize={"40px"}>Hello</StyledBtn>*/}

                <StyledBtn color={myTheme.colors.primary} active btnType={"primary"}>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"}>Hello</StyledBtn>

                <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"}>Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"}>Hello</StyledBtn>

            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`
