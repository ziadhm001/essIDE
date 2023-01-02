import './RecordItem.css';
function RecordItem(props) {
    return (
        <div className="expense-item">
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
                <div className="expense-item__price">{props.id}</div>
            </div>
        </div>
    );
}

export default RecordItem;