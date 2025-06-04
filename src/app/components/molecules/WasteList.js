export default function WasteList(props) {
    return (
        <div>
            <div>{props.logo}</div>
            <div>
                <p>{props.wasteName}</p>
                <p>{props.collectionAmount} {props.collectes}</p>
            </div>
        </div>
    )
}