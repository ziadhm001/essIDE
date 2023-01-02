import './RecordItem.css';
function RecordItem(props) {
    const clickHandler = () => {
        props.onClick(props.name);
    }
    return (
        <div onClick={clickHandler} className="expense-item">
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
                <div className="expense-item__price">{props.id}</div>
            </div>
        </div>
    );
}

export default RecordItem;