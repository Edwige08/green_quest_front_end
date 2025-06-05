import InputWaste from "@/app/components/atoms/InputWaste";
import InputLabel from "../atoms/InputLabel";

export default async function CollectionForm () {

    const response = await fetch("http://localhost:5001/wastes");
    const wastes = await response.json();
    console.log(wastes);

    const lala = () => {

    }
    return (
        <>

            <InputLabel name={date} dataName={date} placeholder={"jhkj"} onChange={lala}/>

            {wastes.map((waste) => {
                    return <InputWaste key={waste.id} wasteTitle={waste.title}/>
                })
            }
        </>
    )
}