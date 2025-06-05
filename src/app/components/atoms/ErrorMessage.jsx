import  { ShieldAlert } from "lucide-react";

export default function ErrorMessage ({message, classes = ""}) {
    return (
        <div className={"border-2 border-red-500 flex justify-center " + classes}>
            <ShieldAlert className="text-red-500" />
            <p className="ml-2">{ message }</p>
        </div>
    )
}