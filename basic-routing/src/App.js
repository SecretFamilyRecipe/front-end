import logo from './logo.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';

function Home(props) {
  return <h1>Home Component</h1>;
}
function Recipies(props) {
  return <h1>Recipes Component</h1>;
}
function newRecipe(props) {
  return <h1>New Recipie Component</h1>;
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
    <Link to = '/home'>Home </Link>
    <Link to ='/recipes'>My Recipes</Link>
    <Link to= '/newRecipe'> Enter New Recipe </Link>

<Route path='/home' component={Home} /> 
<Route path='/recipes' component={Recipies} /> 
<Route path='/newRecipe' component={newRecipe} /> 

      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
