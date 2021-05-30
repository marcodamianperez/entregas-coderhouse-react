import './Main.css';
import NavBar from '../NavBar/NavBar';
import 'materialize-css/dist/css/materialize.min.css';

const Main = () => {
    return (
        <NavBar
            logo={'MDP ProWheels'}
            link1={'Tienda'}
            link2={'Sobre Nosotros'}
            link3={'Contacto'}
        />
    );
}

export default Main;