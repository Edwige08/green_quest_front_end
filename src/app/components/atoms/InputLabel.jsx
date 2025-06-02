export default function InputLabel ({ name, dataName, placeholder, onChange }) {
    return <>
    <div className="flex flex-col">
        <label htmlFor={name}>{name}</label>
        <input
            type="text"
            name={name}
            onChange={(e) => onChange(e.target.value, dataName)}
            placeholder={placeholder}
        />

    </div>
    </>
}