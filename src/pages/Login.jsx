import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";

export default function Login() {
const [form, setForm] = useState({ username: "", password: "" });
const [errors, setErrors] = useState({ username: "", password: "" });


const onChange = (e) => {
const { name, value } = e.target;
setForm((f) => ({ ...f, [name]: value }));
};


const handleSubmit = (e) => {
e.preventDefault();


// Simple front-end check (same allowlist as password/username rule)
const USERNAME_REGEX = /^[A-Za-z0-9._@-]+$/;
const PASSWORD_REGEX = /^[A-Za-z0-9._@-]+$/;

const nextErrors = {
username: !form.username
? "Username is required"
: !USERNAME_REGEX.test(form.username)
? "Use letters, numbers or . _ @ -"
: "",
password: !form.password
? "Password is required"
: !PASSWORD_REGEX.test(form.password)
? "Use letters, numbers or . _ @ -"
: "",
};


setErrors(nextErrors);


const ok = !nextErrors.username && !nextErrors.password;
if (ok) {
// For demo only
alert("Login successful (demo)");
}
};


return (
<section className="card" aria-label="Login">
<h1>Welcome back</h1>
<p className="sub">Login to continue</p>


<form className="form" onSubmit={handleSubmit} noValidate>
<TextInput
label="Username"
name="username"
value={form.username}
onChange={onChange}
placeholder="e.g., john.doe"
error={errors.username}
autoComplete="username"
/>


<TextInput
label="Password"
type="password"
name="password"
value={form.password}
onChange={onChange}
placeholder="Your password"
error={errors.password}
autoComplete="current-password"
/>


<button className="btn" type="submit">Login</button>
</form>


<div className="alt">
Don&apos;t have an account? <Link to="/signup">Sign up</Link>
</div>
</section>
);
}