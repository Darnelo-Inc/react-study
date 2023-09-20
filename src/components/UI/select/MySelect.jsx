import React from "react"

function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <div>
      <select style={{ marginTop: "10px" }} value={value} onChange={onChange}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((elem) => (
          <option key={elem.value} value={elem.value}>
            {elem.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default MySelect
