import './ratingStatus.scss';

export function RatingStatusBad() {
    return (
        <div className="rating-status rating-status--bad">
            Плохо
        </div>
    )
};

export function RatingStatusGood() {
    return (
        <div className="rating-status rating-status--good">
            Хорошо
        </div>
    )
};

export function RatingStatusGreat() {
    return (
        <div className="rating-status rating-status--great">
            Отлично
        </div>
    )
};
