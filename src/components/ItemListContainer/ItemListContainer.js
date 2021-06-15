import { ItemCount } from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const onAdd = (amount, stock) => {
        amount <= stock ? alert(`Compraste ${amount} producto(s)`) : alert('No hay stock disponible para este producto');
    }

    return(
        <>
            <ItemList />
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;