export default function InputLabel ({ name, dataName, placeholder, onChange, type,value }) {
    return <>
    <div className="flex flex-col">
        <label htmlFor={name}>{name}</label>
        <input
            className="p-2"
            type={type}
            name={name}
            onChange={(e) => onChange(e.target.value, dataName)}
            {...(value !== undefined ? { value } : {})}
            placeholder={placeholder}
        />

    </div>
    </>
}