import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Router //
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styles //
import theme from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';
import FontFaceObserver from 'fontfaceobserver';

// Screens //
import ComingSoon from 'screens/ComingSoon';

// Components //
const Root = styled.div`
  flex: 1;
`;

// Fonts //
const font = new FontFaceObserver('sofia-pro')

class App extends Component {
  componentDidMount() {
    font.load().then(() => {
      document.body.classList.add('fontLoaded');
    }, () => {
      document.body.classList.remove('fontLoaded');
    })
  }

  render() {
    return (
      <ThemeProvider
        theme={theme}
      >
        <Root>
          <Router>
            <Switch>
              <Route
                path="/coming-soon"
                component={ComingSoon}
              />
              <Route
                render={() => <Redirect to="/coming-soon" />}
              />
            </Switch>
          </Router>
          <GlobalStyles />
        </Root>
      </ThemeProvider>
    );
  }
}

export default App;
