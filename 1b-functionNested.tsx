// @ts-ignore
import { useCollection, useKey } from "@dico/react";

export default function LoginForm() {
  const login = useCollection("login", [
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
      <label>{login.email.label}</label>

      <input type="email" placeholder={login.email.placeholder} />
      <label>{login.password.label}</label>
      <input type="password" placeholder={login.password.placeholder} />

      <input type="submit" value={login.submitLabel} />
    </form>
  );
}
