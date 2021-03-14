import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './About.js';
import Contacts from './Contacts.js';
import Home from './Home.js';
import Reviews from './Reviews.js';

import NavBar from './NavBar.js';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
