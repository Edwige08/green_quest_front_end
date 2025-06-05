export default function InputLabel ({ name, dataName, placeholder, onChange, type, maxLength = 150, classes = "border-2 border-black-200" }) {

    return <>
        <div className="flex flex-col mb-5">
            <label htmlFor={name} className="mb-2">{name}</label>
            <input
                type={type}
                name={name}
                onChange={(e) => onChange(e.target.value, dataName)}
                placeholder={placeholder}
                maxLength={maxLength}
                className={classes + " p-2 rounded-md"}
            />
        </div>
    </>

}