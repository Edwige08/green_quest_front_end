export default function InputLabel ({ name, dataName, placeholder, onChange, type }) {
    return <>
    <div className="flex flex-col">
        <label htmlFor={name}>{name}</label>
        <input
            type={type}
            name={name}
            onChange={(e) => onChange(e.target.value, dataName)}
            placeholder={placeholder}
        />

    </div>
    </>
}