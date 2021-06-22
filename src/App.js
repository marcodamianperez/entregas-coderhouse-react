import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar logo={'MDP ProWheels'} link1={'Auto'} link2={'Camioneta'} />
            <Switch>
                <Route exact path="/">
                    <ItemListContainer heading={'Un nuevo estilo para tu auto'} />
                </Route>
                <Route path="/category/:categoryId">
                    <ItemListContainer heading={'Un nuevo estilo para tu auto'} />
                </Route>
                <Route exact path="/item/:id">
                    <ItemDetailContainer />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;