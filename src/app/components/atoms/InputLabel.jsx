export default function InputLabel({name, dataName, placeholder, onChange, type, value, maxLength = 150, classes = 'border-1 border-(--border-color)'}) {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={name} className="mb-2">
          {name}
        </label>
        <input
          type={type}
          name={name}
          onChange={(e) => onChange(e.target.value, dataName)}
          {...(value !== undefined ? {value} : {})}
          placeholder={placeholder}
          maxLength={maxLength}
          className={
            classes +
            ' mb-2 rounded-md p-2 hover:border-(--primary-color-hover) hover:ring-(--primary-color-hover) focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color) focus:outline-none'
          }
        />
      </div>
    </>
  )
}
