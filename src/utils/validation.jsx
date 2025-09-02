const NAME_REGEX = /^[A-Za-z ]+$/; // letters and spaces
// Allow letters, digits, and a safe set of special characters
const USERNAME_REGEX = /^[A-Za-z0-9._@-]+$/;
const PASSWORD_REGEX = /^[A-Za-z0-9._@-]+$/;
const GMAIL_REGEX = /^[A-Za-z0-9._%+-]+@gmail\.com$/i;
// +<countrycode> <number> (7-14 digits for number part)
const PHONE_REGEX = /^\+\d{1,3}\s?\d{7,14}$/;


export function validateName(v) {
if (!v) return "Name is required";
if (!NAME_REGEX.test(v)) return "Only alphabets are allowed";
return "";
}


export function validateUsername(v) {
if (!v) return "Username is required";
if (!USERNAME_REGEX.test(v)) return "Use letters, numbers or . _ @ -";
return "";
}


export function validatePassword(v, username) {
if (!v) return "Password is required";
if (!PASSWORD_REGEX.test(v)) return "Use letters, numbers or . _ @ -";
if (username && v === username) return "Password must not be the same as username";
return "";
}


export function validateConfirmPassword(confirm, password) {
if (!confirm) return "Confirm your password";
if (confirm !== password) return "Passwords do not match";
return "";
}


export function validateEmail(v) {
if (!v) return "Email is required";
if (!GMAIL_REGEX.test(v)) return "Enter a valid Gmail (e.g., name@gmail.com)";
return "";
}


export function validatePhone(v) {
if (!v) return "Phone number is required";
if (!PHONE_REGEX.test(v)) return "Use +<code> <number> (e.g., +91 9876543210)";
return "";
}


export function validateAllSignup(form) {
return {
name: validateName(form.name),
username: validateUsername(form.username),
email: validateEmail(form.email),
phone: validatePhone(form.phone),
password: validatePassword(form.password, form.username),
confirm: validateConfirmPassword(form.confirm, form.password),
};
}


export function hasErrors(errors) {
return Object.values(errors).some(Boolean);
}