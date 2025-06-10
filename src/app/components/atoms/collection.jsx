export default function Collection ({ date, ville, wastes }) {

    console.log(ville)

    return (
        <div>
            <p>{date}</p>
            <p>{ville}</p>
            {/* {wastes.map()} */}
        </div>
    )

}