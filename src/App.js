import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import { Suspense,lazy } from 'react';
import Loader from './components/Loader';

// Pages
const HomePage = lazy(()=> import('./pages/Homepage'));
const PokemonPage = lazy(()=> import('./pages/PokemonPage'));
const AddToFavourite = lazy(()=> import('./pages/AddToFavourite'));


const App = () => {
  return (
    <Router>
    <Suspense fallback = {<div><Loader /></div>}>
      <Header/>
      <Container>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/pokemon/:id' component={PokemonPage}/>
        <Route path='/favourite' component = {AddToFavourite} />
        <Route path="*" component = {NotFound}/>
        </Switch>
      </Container>
      </Suspense>
    </Router>
  );
}

export default App;