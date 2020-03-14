import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Home from './Home';
import CreateCatalogue from './CreateCatalogue';
import AddMusic from './AddMusic';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import ViewAll from './ViewAll';
import IndivItem from './IndivItem';
import LoginPage from './LoginPage';
// import PrivateRoute from '../Utils/PrivateRoute'
// import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import NotFound from './NotFound'

class Main extends React.Component {
    
    render() {
        return (
            <Switch>
                <Route exact path = '/'
                component={Landing} />
                <Route path = '/home' component={Home} />
                <Route path = '/create-catalogue' component={CreateCatalogue} />
                <Route path = '/add-music' component={AddMusic} />
                <Route path = '/search-form' component={SearchForm} />
                <Route path = "/search-results" component={SearchResults} />
                <Route path = "/view-all" component={ViewAll} />
                <Route path="/indiv-item" component={IndivItem} />
                <Route path="/login-form" component={LoginPage} />
                <Route component={NotFound} />
            </Switch>

        );
    }
}



export default Main;