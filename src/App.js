import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import RecipeDetails from './components/RecipeDetails'
import Create from './components/Create'
import Update from './components/Update'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import NotFound from './components/NotFound';
import { useState } from 'react';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router> 
      <div className="App">
        <header>
          <Navbar isAuthenticated ={ isAuthenticated } setIsAuthenticated = { setIsAuthenticated }/>
        </header>
        <section className="container">
          <Switch>
            <Route exact path="/"><Content /></Route>
            {
              isAuthenticated? (
                <Route exact path="/dish/:id"> <RecipeDetails /> </Route>
              ):(
                <Redirect to='/' />
              )
            }
            
            <Route exact path="/add">
              {
                isAuthenticated ? (
                  <Create formTitle = { 'Add new recipe' } btnValue = { 'Add' }/> 
                ):(
                  <Redirect to='/' />
                )
              }
            </Route>
            <Route exact path="/update/:id"> <Update formTitle = { 'Update recipe' } btnValue = { 'Update' }/> </Route>
            <Route path="*"> <NotFound/> </Route>
          </Switch>
        </section>
        <footer className="container-fluid bg-warning">
          <Footer />
        </footer>
      </div>
    </Router>
    
  );
}

export default App;
