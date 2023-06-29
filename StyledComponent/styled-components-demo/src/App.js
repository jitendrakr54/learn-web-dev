import { ThemeProvider, createGlobalStyle } from "styled-components";

import logo from "./logo.svg";
import "./App.css";
import "./styles.css";

import StyledButton, {
  FancyButton,
  SubmitButton,
  AnimatedLogo,
  DarkButton,
} from "./components/Button/Button";

/* .
const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0ms.5s all ease-out;
`;

function App() {
  return (
    <div className="App">
      <button>Button</button>
      <StyledButton>StyledButton</StyledButton>
    </div>
  );
}
*/

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe-UI",
};

const GlobalStyle = createGlobalStyle`
  botton {
    /* font-family: 'Roboto'; */
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <AnimatedLogo src={logo} alt="logo" />
        <StyledButton>StyledButton</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">StyledButton</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="a">Fancy Button</FancyButton>
        {/* <FancyButton as="a" variant="outline">
          Fancy Button
        </FancyButton> */}
        <div>
          <br />
        </div>
        <SubmitButton>Submit</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Theme</DarkButton>
      </div>
    </ThemeProvider>
  );
}
export default App;
