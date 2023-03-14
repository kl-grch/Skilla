import './buttonAddOrder.scss';

export default function ButtonAddOrder() {
    return (
        <button className="add-order">
            <div className="add-order__label">Добавить заказ</div>
            <div className="add-order__icon">
                <img src="/img/icons/plus.svg" alt="plus" />
            </div>
        </button>
    )
}