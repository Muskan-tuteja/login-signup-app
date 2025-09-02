import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import { validateAllSignup, hasErrors } from "../utils/validation";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateAllSignup(form);
    setErrors(nextErrors);

    if (!hasErrors(nextErrors)) {
      // In real app → call API here
      navigate("/login", {
        replace: true,
        state: { flash: "Sign-up successful! You can now log in." },
      });
    }
  };

  return (
    <section className="card" aria-label="Sign up">
      <h1>Create account</h1>
      <p className="sub">It takes less than a minute</p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextInput
          label="Full name"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="e.g., Muskan Tuteja"
          error={errors.name}
          autoComplete="name"
        />

        <TextInput
          label="Username"
          name="username"
          value={form.username}
          onChange={onChange}
          placeholder="letters, numbers, . _ @ -"
          error={errors.username}
          autoComplete="username"
        />

        <TextInput
          label="Email (Gmail only)"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="name@gmail.com"
          error={errors.email}
          autoComplete="email"
        />

        <TextInput
          label="Phone (+country code)"
          name="phone"
          value={form.phone}
          onChange={onChange}
          placeholder="e.g., +91 9876543210"
          error={errors.phone}
          autoComplete="tel"
        />

        <TextInput
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Use letters, numbers or . _ @ -"
          error={errors.password}
          autoComplete="new-password"
        />

        <TextInput
          label="Confirm password"
          type="password"
          name="confirm"
          value={form.confirm}
          onChange={onChange}
          placeholder="Re-enter your password"
          error={errors.confirm}
          autoComplete="new-password"
        />

        <button className="btn" type="submit">Sign up</button>
      </form>

      <div className="alt">
        Already have an account? <Link to="/login">Go to login</Link>
      </div>
    </section>
  );
}
