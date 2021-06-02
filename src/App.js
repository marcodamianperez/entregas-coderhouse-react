import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
    return (
        <div>
            <NavBar
                logo={'MDP ProWheels'}
                link1={'Tienda'}
                link2={'Sobre Nosotros'}
                link3={'FAQ'}
                link4={'Contacto'}
            />
            <ItemListContainer greeting={'Bienvenidos a MDP ProWheels'} />
        </div>
    );
}

export default App;