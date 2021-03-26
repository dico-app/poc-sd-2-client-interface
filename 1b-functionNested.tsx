// @ts-ignore
import { useCollection, useKey } from "@dico/react";

export default function LoginForm() {
  const loginForm = useCollection("login", [
    useCollection("email", [
      useKey("label"), 
      useKey("placeholder")
    ]),
    useCollection("password", [
      useKey("label"), 
      useKey("placeholder")
    ]),
    useKey("submitLabel", { maxLength: 30 }),
  ]);

  return (
    <form method="POST" action="/login">
      <label>{loginForm.email.label}</label>

      <input type="email" placeholder={loginForm.email.placeholder} />
      <label>{loginForm.password.label}</label>
      <input type="password" placeholder={loginForm.password.placeholder} />

      <input type="submit" value={loginForm.submitLabel} />
    </form>
  );
}
