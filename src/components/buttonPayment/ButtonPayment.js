import './buttonPayment.scss';

export default function ButtonPayment() {
    return (
        <button className="payment">
            <div className="payment__label">Оплата</div>
            <div className="payment__icon">
                <img src="/img/icons/alert-icon.svg" alt="exclamation" />
            </div>
        </button>
    )
}