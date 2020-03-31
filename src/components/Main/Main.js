import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../components/App/App.css';
import Landing from '../Landing/Landing';
import Home from '../Home/Home';
import AddMusic from '../AddMusic/AddMusic';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import ViewAll from '../ViewAll/ViewAll';
import EditMusic from '../EditMusic/EditMusic';
import NotFound from '../NotFound/NotFound';
import { BrowserRouter } from 'react-router-dom';

class Main extends React.Component {
    
    render() {
        return (
            <BrowserRouter>
                 <Switch>
                    <Route exact path = '/'
                    component={Landing} />
                    <Route path = '/home' component={Home} />
                    <Route path = '/add-music' component={AddMusic} />
                    <Route path = '/search-form' component={SearchForm} />
                    <Route path = "/search-results" component={SearchResults} />
                    <Route path = "/view-all" component={ViewAll} />
                    <Route path="/edit-music" component={EditMusic} />
                    <Route component={NotFound} />
                 </Switch>
            </BrowserRouter>

        );
    }
}



export default Main;