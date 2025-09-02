import React from "react";


export default function TextInput({
label,
type = "text",
name,
value,
onChange,
placeholder,
error,
autoComplete,
}) {
const id = name;
return (
<div className="row">
{label && (
<label htmlFor={id} className="label">
{label}
</label>
)}
<input
id={id}
name={name}
type={type}
value={value}
onChange={onChange}
placeholder={placeholder}
className="input"
autoComplete={autoComplete}
aria-invalid={Boolean(error)}
aria-describedby={error ? `${id}-error` : undefined}
/>
{error && (
<div id={`${id}-error`} className="error">
{error}
</div>
)}
</div>
);
}