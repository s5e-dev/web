import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

// Router //
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Styles //
import theme from "styles/theme";
import GlobalStyles from "styles/GlobalStyles";
import FontFaceObserver from "fontfaceobserver";

// Screens //
import Home from "screens/Home";

// Components //
const Root = styled.div`
  flex: 1;
`;

// Fonts //
const font = new FontFaceObserver("sofia-pro");

class App extends Component {
  componentDidMount() {
    font.load().then(
      () => {
        document.body.classList.add("fontLoaded");
      },
      () => {
        document.body.classList.remove("fontLoaded");
      }
    );
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Router>
          <GlobalStyles />
        </Root>
      </ThemeProvider>
    );
  }
}

export default App;
