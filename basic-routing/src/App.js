// import logo from './logo.svg';
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
  <h1>Enter New Recipe</h1>
  <div className= "NewEntry">

        <form>
          <label htmlFor ='dishName'></label>
          <input
          maxLength= '20'
          placeholder= 'Recipe Name'
          id= 'dishName'
          name= "dName"
          type= 'text'
          />
        </form>

        <form>
          <label htmlFor ='dSource'></label>
          <input
          maxLength= '20'
          placeholder= 'Source'
          id= 'dishSource'
          name= "dSource"
          type= 'text'
          />
        </form>

        <form>
          <label htmlFor = 'ingredients'></label>
          <input
          maxLength= '100'
          placeholder= 'Ingredients'
          id= 'ingredientsLs'
          name= "ingredLs"
          type= 'text'
          />
        </form>

        <form>
          <label htmlFor = 'instructions'></label>
          <input
          maxLength= '300'
          placeholder= 'Instructions'
          id= 'instructions'
          name= "Instruct"
          type= 'text'
          />
        </form>
{/* add drop down for category list */}

          
          <label htmlFor ='foodCat'>Category</label>
  <select id='foodCat' name='category'>
        <option value='1'>Breakfast</option>
        <option value='2'>Lunch</option>
        <option value='3'>Appetizer</option>
        <option value='4'>Snack</option>
        <option value='5'>Dinner</option>
        <option value='6'>Dessert</option>
          
          
  </select> 
</div>

  

{/*  add functionality to 'Enter New Recipe' button! */}
  < button onClick={() => push ("/newRecipe")}>Enter New Recipe</button>
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
