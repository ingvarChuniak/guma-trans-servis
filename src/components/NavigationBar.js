import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

function Home(){
    return <span>Home</span>
}

function About(){
    return <span>About</span>
}
