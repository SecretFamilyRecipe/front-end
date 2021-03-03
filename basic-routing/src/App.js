// import logo from './logo.svg';//
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

function Home(props) {
  return <h1>Home Component</h1>; 

}
function Recipies(props) {
  const {push} = props.history;
  return <>
  <h1>Recipes Component</h1>
 
  < button onClick={() => push ("/newRecipe")}>Enter New Recipe</button>
  < button onClick={() => push ("/")}>Return Home</button>
    </>
}
function newRecipe(props) {
  const {push} = props.history;
  return <>
  <h1>New Recipe Component</h1>
  
  < button onClick={() => push ("/recipes")}>My Recipes</button>
  < button onClick={() => push ("/")}>Return Home</button>
    </>
  
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
    <Link to = '/'>Home </Link>
    <Link to ='/recipes'>My Recipes</Link>
    <Link to= '/newRecipe'> Enter New Recipe </Link>

<Route exact path='/' component={Home} /> 
<Route path='/recipes' component={Recipies} /> 
<Route path='/newRecipe' component={newRecipe} /> 

      </Router>
      </header>
    </div>
  );
}

export default App;
