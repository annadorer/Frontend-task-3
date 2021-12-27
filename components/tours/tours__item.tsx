export interface TourItems {
    class: string,
    title: string,
    description: string,
    price: string,
}

export interface IToursProps {
    item: TourItems,
    onClick?: (item: IToursProps) => void
}

export function Tour(props: IToursProps) {
    return (
        <div className={props.item.class}>
            <h3 className="tours-item__title">{props.item.title}</h3>
            <p className="tours-item__descriptions">{props.item.description}</p>
            <div className="tours-item__money">
                <p className="tours-item__moneyprice">
                    От
                    <span className="tours-item__moneypriceb"> {props.item.price} </span>
                    р.
                </p>
                <button className="tours-item__buy">Купить</button>
            </div>
        </div>
    )
}