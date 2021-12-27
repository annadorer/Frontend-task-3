export interface ISightseens__item {
    title: string;
    image: string;
    description: string;
    descriptionpk: string;
}

export interface ISightseensProps {
    item: ISightseens__item,
    onClick?: (item: ISightseens__item) => void
}

export function Sightseen(props: ISightseensProps) {
    return (
        <div className="sightseens__item">
            <img className="sightseens__img" src={props.item.image} alt="sightseen"></img>
            <div className="sightseens__itemtext">
                <h4 className="sightseens__itemtext-title">{props.item.title}</h4>
                <p className="sightseens__itemtext-main">{props.item.description}</p>
                <p className="sightseens__itemtext-mainpk">{props.item.description}
                    <br /> <br />{props.item.descriptionpk}
                </p>
            </div>
        </div>
    )
}