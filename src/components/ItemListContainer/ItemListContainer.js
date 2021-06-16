import { ItemCount } from '../ItemCount/ItemCount';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    return(
        <>
            <h1 className="display-5 text-center primary-heading">Un nuevo estilo para tu auto</h1>
            <ItemList />
            <ItemDetailContainer />
        </>
    );
}

export default ItemListContainer;