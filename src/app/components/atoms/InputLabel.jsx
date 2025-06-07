export default function InputLabel ({ name, dataName, placeholder, onChange, type, value, maxLength = 150, classes = "border-2 border-black-200" }) {

    return <>
        <div className="flex flex-col  ">
            <label htmlFor={name} className="mb-2">{name}</label>
            <input
                type={type}
                name={name}
                onChange={(e) => onChange(e.target.value, dataName)}
                {...(value !== undefined ? { value } : {})}
                placeholder={placeholder}
                maxLength={maxLength}
                className={classes + " p-2 rounded-md focus:outline-none focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color) hover:border-(--primary-color-hover) hover:ring-(--primary-color-hover) mb-2"}
            />
        </div>
    </>

}