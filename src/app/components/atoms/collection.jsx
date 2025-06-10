export default function Collection ({ date, ville, wastes }) {

    console.log(wastes)

    return (
        <div>
            <p>{date}</p>
            <p>{ville}</p>
            {/* {wastes.map()} */}
        </div>
    )

}